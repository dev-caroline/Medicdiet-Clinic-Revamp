const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const FormData = require('../model/FormData');
require('dotenv').config();

let conn = null;

async function connectToDatabase() {
  if (conn == null) {
    conn = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

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
      from: process.env.USER,
      to: 'carolineajiboye12@gmail.com, medicdietclinic@gmail.com',
      subject: 'New Patient Form Submitted',
      html: `<body style="font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0;">
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
    res.status(200).json({ message: 'Form submitted and email sent!', data: formData });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting form', error: err.message });
  }
};
