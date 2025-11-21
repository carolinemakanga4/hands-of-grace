import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'phone', 'desiredRole', 'yearsExperience', 'availability'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate years of experience is a number
    if (isNaN(Number(body.yearsExperience)) || Number(body.yearsExperience) < 0) {
      return NextResponse.json(
        { success: false, error: 'Years of experience must be a valid number' },
        { status: 400 }
      );
    }

    // Log the data (in production, you would save to database, send email, etc.)
    console.log('Job Application Form Submission:', {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      desiredRole: body.desiredRole,
      yearsExperience: body.yearsExperience,
      availability: body.availability,
      message: body.message || 'No additional message',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing job application:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

