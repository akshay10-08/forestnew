import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic honeypot check (assuming the form sends a hidden 'website' field)
    if (body.website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Here we would integrate Resend/Nodemailer and Google Sheets
    // Example:
    // await resend.emails.send({ ... })
    // await googleSheets.append({ ... })

    console.log("Enquiry received:", body);

    return NextResponse.json({ success: true, message: "Enquiry received successfully." }, { status: 200 });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json({ error: "Failed to process enquiry" }, { status: 500 });
  }
}
