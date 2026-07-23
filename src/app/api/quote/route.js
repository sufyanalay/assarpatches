import { getTransporter } from "@/lib/mailer";

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Assar Patches Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Quote Request — ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Quote email error:", err);
    return Response.json(
      { ok: false, error: "Failed to send message, please try again" },
      { status: 500 }
    );
  }
}