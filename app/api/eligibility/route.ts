import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Eligibility from "@/lib/db/models/Eligibility";
import nodemailer from "nodemailer";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const result = await Eligibility.find().sort({ createdAt: -1 });
    return NextResponse.json({
      result,
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        message: "Something Went Wrong",
        error: error,
      },
      {
        status: 500,
      },
    );
  }
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const { requirement, uae, fname, lname, email, phone } = await req.json();
    const result = await Eligibility.create({
      requirement,
      uae,
      fname,
      lname,
      email,
      phone,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tbcgulfmarketing@gmail.com",
        pass: "gyqj dwxp nrmo qobv",
      },
    });

    const mailOptions = {
      from: "tbcgulfmarketing@gmail.com",
      to: "info@zahads.com",
      subject: "Eligibiliy check from website",
      text: `Someone wants to check his visa eligibility:
                 
            Name: ${fname} ${lname}
            Email: ${email}
            Phone: ${phone}
            Meet Requirements: ${requirement}
            In UAE: ${uae}`,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      result,
      message: "Thank you for sending inquiry, we will revert back shortly.",
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: "Error",
        message: "Something Went Wrong",
        error: error,
      },
      {
        status: 500,
      },
    );
  }
};
