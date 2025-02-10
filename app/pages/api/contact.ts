import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      city,
      state,
      zipCode,
      country,
      messageQuery,
    } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // Use `true` for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>ZIP Code:</strong> ${zipCode}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${messageQuery}</p>
      `,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ success: true, message: "Your message has been sent!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send message." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
