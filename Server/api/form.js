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
      html: `<p>New submission from ${formData.firstName} ${formData.lastName}</p>`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Form submitted and email sent!', data: formData });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error submitting form', error: err.message });
  }
};
