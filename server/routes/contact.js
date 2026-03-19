const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background: #fafafa; border-radius: 12px;">
          <div style="background: #1e4a14; color: white; padding: 20px 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">🌱 New Green Agro Coal</h2>
            <p style="margin: 5px 0 0; opacity: 0.8; font-size: 14px;">New Contact Form Submission</p>
          </div>
          <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 14px; width: 120px;">Name:</td>
                <td style="padding: 10px 0; color: #333; font-size: 14px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 14px;">Email:</td>
                <td style="padding: 10px 0; color: #333; font-size: 14px;"><a href="mailto:${email}" style="color: #4caf2f;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 14px;">Phone:</td>
                <td style="padding: 10px 0; color: #333; font-size: 14px;">${phone || 'Not provided'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #888; font-size: 14px; margin: 0 0 8px;">Message:</p>
              <p style="color: #333; font-size: 14px; line-height: 1.6; margin: 0; background: #f8f8f8; padding: 15px; border-radius: 8px;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

module.exports = router;
