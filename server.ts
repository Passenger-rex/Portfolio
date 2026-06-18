import express from "express";
import path from "path";
import cors from "cors";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API route first: Receive contact form submission and send via Nodemailer
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.error("Nodemailer SMTP configurations are missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS.");
    return res.status(500).json({
      error: "The email server configuration is incomplete on this environment. Please configure SMTP credentials (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS)."
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for port 465 (SMTPS), false for others (e.g. 587)
      auth: {
        user,
        pass,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name}" <${user}>`, // Sent from the authorized SMTP user to prevent spam categorization
      replyTo: email, // Directly reply to the user who sent the form
      to: "johntobismart@gmail.com", // Recipient email address requested by user
      subject: `New Portfolio Message from ${name}`,
      text: `You have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid rgba(255,117,24,0.15); border-radius: 16px; background-color: #0d0d0d; color: #ffffff;">
          <h2 style="color: #FF7518; font-size: 20px; font-weight: 700; border-bottom: 2px solid rgba(255,117,24,0.1); padding-bottom: 12px; margin-top: 0; letter-spacing: -0.025em;">
            New Contact Submission
          </h2>
          <div style="margin-top: 20px; font-size: 14px; line-height: 1.6;">
            <p style="margin: 6px 0;"><strong style="color: #FF7518;">Sender Name:</strong> ${name}</p>
            <p style="margin: 6px 0;"><strong style="color: #FF7518;">Sender Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
          </div>
          <div style="margin-top: 24px; font-size: 15px; line-height: 1.6; background-color: rgba(255,255,255,0.03); padding: 16px; border-left: 4px solid #FF7518; border-radius: 8px;">
            <strong style="color: #ffffff; display: block; margin-bottom: 8px;">Message:</strong>
            <p style="margin: 0; color: #d1d5db; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 24px 0;" />
          <p style="font-size: 11px; color: #6b7280; text-align: center; margin: 0;">Sent securely via Nodemailer from your customized Portfolio server.</p>
        </div>
      `,
    });

    console.log("Nodemailer sent contact email successfully. Message ID:", info.messageId);
    return res.status(200).json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Nodemailer failed to send email:", error);
    return res.status(500).json({ error: "Failed to send the email request. Please try again later or contact the owner directly." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
