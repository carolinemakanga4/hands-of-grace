import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'organisation', 'email', 'phone', 'staffType', 'location', 'shiftType', 'startDate'];
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

    // Log the data (in production, you would save to database, send email, etc.)
    console.log('Staff Request Form Submission:', {
      name: body.name,
      organisation: body.organisation,
      email: body.email,
      phone: body.phone,
      staffType: body.staffType,
      location: body.location,
      shiftType: body.shiftType,
      startDate: body.startDate,
      message: body.message || 'No additional message',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing employer request:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

