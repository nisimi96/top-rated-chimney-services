import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone is required'),
  service: z.string().min(1, 'Service is required'),
  address: z.string().min(5, 'Valid address is required'),
  message: z.string().min(10, 'Message is required'),
  contactPreference: z.enum(['email', 'phone'], {
    errorMap: () => ({ message: 'Contact preference is required' }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const companyEmail = process.env.COMPANY_EMAIL || 'info@topratedchimney.com';

    // Simple email to you
    const emailContent = `
New Customer Contact

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Property Address: ${validatedData.address}
Service Needed: ${validatedData.service}
Preferred Contact Method: ${validatedData.contactPreference === 'email' ? 'Email' : 'Phone Call'}

Message:
${validatedData.message}

---
Sent from Top Rated Chimney Services Contact Form
    `;

    // Send email to company
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: companyEmail,
      subject: 'new customer (chimney) website',
      text: emailContent,
      replyTo: validatedData.email,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0].message },
        { status: 400 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    console.error('Nodemailer error details:', errorMessage);

    return NextResponse.json(
      { success: false, error: 'Failed to send email. Check server logs.' },
      { status: 500 }
    );
  }
}
