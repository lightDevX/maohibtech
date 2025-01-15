import nodemailer from "nodemailer";

// Create a reusable transporter object
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send Email Logic
async function sendEmail(data: ContactFormData) {
  const message = {
    from: process.env.EMAIL_USER,
    to: "recipient@example.com", // Replace with the recipient's email address
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission:\n\n
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Mobile: ${data.mobileNumber}
      City: ${data.city}, ${data.state}, ${data.zipCode}, ${data.country}
      Message: ${data.messageQuery}`,
  };

  await transporter.sendMail(message);
}
