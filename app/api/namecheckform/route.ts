import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db/mongodb';
import NameCheckForm from '@/lib/db/models/NameCheckForm';

export async function POST(req: Request) {
  try {
    await dbConnect();

    const data = await req.json();

    const form = await NameCheckForm.create(data);

    return NextResponse.json({ success: true, data: form }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      // @ts-ignore
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
