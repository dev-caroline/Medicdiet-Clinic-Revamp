const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const FormData = require('./model/FormData');
const punycode = require('punycode/');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors({
  origin: "*",  // or "*" to allow all
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// normalize PORT to number and provide a default
const port = process.env.PORT ? Number(process.env.PORT) : 3600;

// Support multiple env var names for Mongo connection string (URI or MONGO_URI)
const URI = process.env.URI || process.env.MONGO_URI;

// Debugging help: show which env variables are present (don't print secrets)
console.log('Server is starting...');
console.log('PORT from env:', process.env.PORT ? process.env.PORT : '(not set)');
console.log('Mongo URI present:', !!URI);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/form", (req, res) => {
    res.json({ status: "successfully sent" });
});
app.post('/form', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();

        const emailUser = process.env.EMAIL_USER || process.env.USER;
        const emailPass = process.env.EMAIL_PASS || process.env.PASS;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || process.env.USER,
            to: 'carolineajiboye12@gmail.com, medicdietclinic@gmail.com',
            subject: 'New Patient Form Submitted',
            text: `New form submission from ${formData.firstName} ${formData.lastName}.`,
            html: `
<body style="font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="text-align: center; padding-bottom: 20px;">
            <h3 style="color: #333; font-size: 28px; font-weight: 600; margin: 0; color: #0c4b6e;">New Form Submission</h3>
        </div>

        <!-- Content Sections -->
        <div style="margin-bottom: 20px;">
            <h4 style="color: #0c4b6e; font-size: 18px; font-weight: bold; margin-bottom: 8px;">Personal Information</h4>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
                    <strong style="color: #333;">Name</strong>
                    <p style="margin: 0; color: #555;">${formData.firstName} ${formData.lastName}</p>
                </div>
                <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
                    <strong style="color: #333;">Age</strong>
                    <p style="margin: 0; color: #555;">${formData.age}</p>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
                    <strong style="color: #333;">Email</strong>
                    <p style="margin: 0; color: #555;">${formData.email}</p>
                </div>
                <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
                    <strong style="color: #333;">Phone</strong>
                    <p style="margin: 0; color: #555;">${formData.phone}</p>
                </div>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h4 style="color: #0c4b6e; font-size: 18px; font-weight: bold; margin-bottom: 8px;">Health Information</h4>
            <div style="padding: 10px; background-color: #f7f7f7; border-radius: 8px; margin-bottom: 12px;">
                <strong style="color: #333;">Diet Plan</strong>
                <p style="margin: 0; color: #555;">${formData.dietPlan}</p>
            </div>
            <div style="padding: 10px; background-color: #f7f7f7; border-radius: 8px; margin-bottom: 12px;">
                <strong style="color: #333;">Medical Diagnosis</strong>
                <p style="margin: 0; color: #555;">${formData.medicalDiagnosis}</p>
            </div>
            <div style="padding: 10px; background-color: #f7f7f7; border-radius: 8px; margin-bottom: 12px;">
                <strong style="color: #333;">Family History</strong>
                <p style="margin: 0; color: #555;">${formData.familyHistory.join(', ')}</p>
            </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ddd; margin-top: 30px;">
            <p style="font-size: 14px; color: #888;">&copy; 2025 MedicDiet Clinic. All rights reserved.</p>
        </div>
    </div>
</body>

            `

        };

        // Send response immediately after saving to DB
        res.status(200).json({ message: 'Form submitted successfully!', data: formData.toJSON() });

        // Send email asynchronously (don't block the response)
        transporter.sendMail(mailOptions)
            .then(() => {
                console.log('Email sent successfully!');
            })
            .catch((emailError) => {
                console.error('Error sending email:', emailError);
            });

        console.log(req.body);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at: ${port}`);
});
