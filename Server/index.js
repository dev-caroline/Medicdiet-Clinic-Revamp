const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const FormData = require('./model/FormData');
require('dotenv').config();
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3600;
const uri = process.env.URI;

mongoose.connect(uri)
    .then(() => {
        console.log('Mongodb connected');
    })
    .catch((err) => {
        console.log(err);
    });


// app.post('/form', async (req, res) => {
//     try {
//         const formData = new FormData(req.body);
//         await formData.save();

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.USER,
//                 pass: process.env.PASS
//             }
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: 'carolineajiboye12@gmail.com, medicdietclinic@gmail.com',
//             subject: 'New Patient Form Submitted',
//             text: `New form submission from ${formData.firstName} ${formData.lastName}.`,
//             html: `
// <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0;">
//     <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
//         <!-- Header -->
//         <div style="text-align: center; padding-bottom: 20px;">
//             <h3 style="color: #333; font-size: 28px; font-weight: 600; margin: 0; color: #0c4b6e;">New Form Submission</h3>
//         </div>

//         <!-- Content Sections -->
//         <div style="margin-bottom: 20px;">
//             <h4 style="color: #0c4b6e; font-size: 18px; font-weight: bold; margin-bottom: 8px;">Personal Information</h4>
//             <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
//                 <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
//                     <strong style="color: #333;">Name</strong>
//                     <p style="margin: 0; color: #555;">${formData.firstName} ${formData.lastName}</p>
//                 </div>
//                 <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
//                     <strong style="color: #333;">Age</strong>
//                     <p style="margin: 0; color: #555;">${formData.age}</p>
//                 </div>
//             </div>
//             <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
//                 <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
//                     <strong style="color: #333;">Email</strong>
//                     <p style="margin: 0; color: #555;">${formData.email}</p>
//                 </div>
//                 <div style="flex-basis: 45%; padding: 10px; background-color: #f7f7f7; border-radius: 8px;">
//                     <strong style="color: #333;">Phone</strong>
//                     <p style="margin: 0; color: #555;">${formData.phone}</p>
//                 </div>
//             </div>
//         </div>

//         <div style="margin-bottom: 20px;">
//             <h4 style="color: #0c4b6e; font-size: 18px; font-weight: bold; margin-bottom: 8px;">Health Information</h4>
//             <div style="padding: 10px; background-color: #f7f7f7; border-radius: 8px; margin-bottom: 12px;">
//                 <strong style="color: #333;">Diet Plan</strong>
//                 <p style="margin: 0; color: #555;">${formData.dietPlan}</p>
//             </div>
//             <div style="padding: 10px; background-color: #f7f7f7; border-radius: 8px; margin-bottom: 12px;">
//                 <strong style="color: #333;">Medical Diagnosis</strong>
//                 <p style="margin: 0; color: #555;">${formData.medicalDiagnosis}</p>
//             </div>
//             <div style="padding: 10px; background-color: #f7f7f7; border-radius: 8px; margin-bottom: 12px;">
//                 <strong style="color: #333;">Family History</strong>
//                 <p style="margin: 0; color: #555;">${formData.familyHistory.join(', ')}</p>
//             </div>
//         </div>

//         <!-- Footer -->
//         <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ddd; margin-top: 30px;">
//             <p style="font-size: 14px; color: #888;">&copy; 2025 MedicDiet Clinic. All rights reserved.</p>
//         </div>
//     </div>
// </body>

//             `
//         };
//         try {
//             await transporter.sendMail(mailOptions);
//             console.log('Email sent successfully!');
//             res.status(200).json({ message: 'Form submitted and email sent successfully!', data: formData });
//         } catch (error) {
//             console.error('Error sending email:', error);
//             res.status(500).json({ message: 'Form submitted but failed to send email.' });
//         }

//     }

//     catch (error) {
//         console.error(error);

//     }
// });


app.post('/form', async (req, res) => {
    try {
        const formData = new FormData(req.body);
        await formData.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });

        const mailOptions = { 
            from: process.env.EMAIL_USER,
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

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
        res.status(200).json({ message: 'Form submitted and email sent successfully!', data: formData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});




app.listen(port, () => {
    console.log(`Server is running at: ${port}`);
});
