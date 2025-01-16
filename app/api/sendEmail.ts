import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // SMTP Transport for Namecheap's email service
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Extract form data from the request body
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

    const mailOptions = {
      from: "process.env.EMAIL_USER", // Sender's email
      to: "khan.m.hasanuzzaman@gmail.com", // Replace with the recipient's email
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
      return res
        .status(200)
        .json({ success: true, message: "Your message has been sent!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "There was an error sending the email.",
      });
    }
  } else {
    // Method not allowed
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
