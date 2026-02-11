import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@alharamtravel.uk";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
const FROM_NAME = "Al Haram Travel Website";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  package?: string;
};

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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const subject = packageName
      ? `Enquiry: ${packageName}`
      : "Contact form submission";

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      packageName ? `Package: ${packageName}` : "",
      "",
      message || "(No message)",
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject,
      text,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
