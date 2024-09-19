import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import Form from '@/lib/db/models/Form';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const data = await req.json();

    const form = await Form.create(data);

    return NextResponse.json({ success: true, data: form }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
