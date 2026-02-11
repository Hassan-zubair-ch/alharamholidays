import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT } from "@/lib/constants";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? process.env.EMAIL_USER ?? "info@alharamtravel.uk";
const FROM_EMAIL = process.env.EMAIL_USER ?? "info@alharamtravel.uk";
const FROM_NAME = "Al Haram Travel";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  package?: string;
};

function getTransporter() {
  const host = process.env.EMAIL_HOST;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const port = process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number.isNaN(port) ? 465 : port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();
    const { name, email, phone, message, package: packageName } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const transporter = getTransporter();
    if (!transporter) {
      console.error("Email not configured: set EMAIL_HOST, EMAIL_USER, EMAIL_PASS (and optionally EMAIL_PORT)");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const subject = packageName
      ? `Enquiry: ${packageName}`
      : "Contact form submission";

    const enquiryText = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      packageName ? `Package: ${packageName}` : "",
      "",
      message || "(No message)",
    ]
      .filter(Boolean)
      .join("\n");

    const enquiryHtml = [
      `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
      phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : "",
      packageName ? `<p><strong>Package:</strong> ${escapeHtml(packageName)}</p>` : "",
      "<p><strong>Message:</strong></p>",
      `<p>${escapeHtml(message || "(No message)").replace(/\n/g, "<br>")}</p>`,
    ]
      .filter(Boolean)
      .join("");

    // 1) Send enquiry to your inbox (admin)
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject,
      text: enquiryText,
      html: `<!DOCTYPE html><html><body>${enquiryHtml}</body></html>`,
    });

    // 2) Send confirmation to the user
    const confirmSubject = "We've received your message – Al Haram Travel";
    const confirmHtml = `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; line-height: 1.6; color: #334155;">
  <p>Dear ${escapeHtml(name)},</p>
  <p>Thank you for getting in touch. We have received your message and will get back to you as soon as possible.</p>
  <p>If your enquiry is urgent, you can call us on <strong>${CONTACT.phone}</strong>.</p>
  <p>Best regards,<br><strong>Al Haram Travel</strong></p>
</body>
</html>`;
    const confirmText = `Dear ${name},\n\nThank you for getting in touch. We have received your message and will get back to you as soon as possible.\n\nIf your enquiry is urgent, you can call us on ${CONTACT.phone}.\n\nBest regards,\nAl Haram Travel`;

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: email,
      subject: confirmSubject,
      text: confirmText,
      html: confirmHtml,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
