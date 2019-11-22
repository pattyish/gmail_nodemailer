import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const router = express.Router();
router.get('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.RECIEVER_EMAIL,
    subject: 'Sending Email using Node.js',
    html: `<h1 style = "color: blue; font-weight: bold;">hello am patrick</h1>
        <p>i was always wonder if we can meet</p>
        <p> is there any thing else</p>
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(201).json({ status: 201, message: 'email sent successful please!' });
    }
  });
});
export default router;
