// import { ContactFormData } from "@/lib/types/contact";
// import nodemailer from "nodemailer";

// // Create a reusable transporter object
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: Number(process.env.EMAIL_PORT),
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Send Email Logic
// export async function sendEmail(data: ContactFormData): Promise<boolean> {
//   const mailOptions = {
//     from: "your-email@example.com", // Sender's email
//     to: "recipient-email@example.com", // Replace with the recipient's email
//     subject: "New Contact Form Submission",
//     html: `
//       <h1>Contact Form Submission</h1>
//       <p><strong>First Name:</strong> ${data.firstName}</p>
//       <p><strong>Last Name:</strong> ${data.lastName}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Mobile Number:</strong> ${data.mobileNumber}</p>
//       <p><strong>City:</strong> ${data.city}</p>
//       <p><strong>State:</strong> ${data.state}</p>
//       <p><strong>ZIP Code:</strong> ${data.zipCode}</p>
//       <p><strong>Country:</strong> ${data.country}</p>
//       <p><strong>Message:</strong> ${data.messageQuery}</p>
//     `,
//   };

//   try {
//     // Send email
//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return false;
//   }
// }
