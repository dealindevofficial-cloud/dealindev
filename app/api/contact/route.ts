import { contactServiceOptions } from "@/data/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const allowedServices = new Set<string>(contactServiceOptions);

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured. Add RESEND_API_KEY to your environment." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const businessName =
    typeof record.businessName === "string" ? record.businessName.trim() : "";
  const serviceInterestedIn =
    typeof record.serviceInterestedIn === "string" ? record.serviceInterestedIn.trim() : "";
  const projectDetails =
    typeof record.projectDetails === "string" ? record.projectDetails.trim() : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (businessName.length > 200) {
    return NextResponse.json({ error: "Business name is too long." }, { status: 400 });
  }
  if (!serviceInterestedIn || !allowedServices.has(serviceInterestedIn)) {
    return NextResponse.json({ error: "Please choose a service." }, { status: 400 });
  }
  if (!projectDetails || projectDetails.length < 10) {
    return NextResponse.json(
      { error: "Please add a bit more detail about your project (at least 10 characters)." },
      { status: 400 },
    );
  }
  if (projectDetails.length > 12000) {
    return NextResponse.json({ error: "Project details are too long." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || "dealindevofficial@gmail.com";
  const from =
    process.env.RESEND_FROM?.trim() || "Deal in Dev <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeBusiness = businessName ? escapeHtml(businessName) : "";
  const safeService = escapeHtml(serviceInterestedIn);
  const safeDetails = escapeHtml(projectDetails).replace(/\n/g, "<br/>");

  const html = `
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    ${safeBusiness ? `<p><strong>Business:</strong> ${safeBusiness}</p>` : ""}
    <p><strong>Service:</strong> ${safeService}</p>
    <p><strong>Project details:</strong></p>
    <p>${safeDetails}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Website inquiry: ${name} — ${serviceInterestedIn}`,
    html,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
