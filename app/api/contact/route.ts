import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Contact from "@/lib/db/models/Contact";
import nodemailer from "nodemailer";
import { isFullName } from "@/lib/utils";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const result = await Contact.find().sort({ createdAt: -1 });
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
    let {
      firstName,
      lastName,
      email,
      phone,
      message,
      company,
      category,
      nationality,
    } = await req.json();

    if (!email || !message || !firstName) {
      return NextResponse.json(
        {
          status: "Error",
          message: "Please Provide All Required Fields",
        },
        {
          status: 400,
        },
      );
    }

    if (!lastName && isFullName(firstName)) {
      const names = firstName.split(" ");
      firstName = names[0];
      lastName = names[1];
    }

    const result = await Contact.create({
      firstName,
      lastName,
      email,
      message,
      company,
      category,
      nationality,
      phone,
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ahmad.itumun@gmail.com",
        pass: "utsb chmt gjyi sgxk",
      },
    });

    const mailOptions = {
      from: "tbcgulfmarketing@gmail.com",
      to: "info@zahads.com",
      subject: `Zahads - New Enquiry Received - ${new Date().toLocaleString()}`,
      text: `You have a new enquiry from Zahads at ${
        new Date().toLocaleString()
      }:
                 
                 Name: ${firstName} ${lastName}
                 Email: ${email}
                 Category: ${category}
                 ${nationality ? `Nationality: ${nationality}` : ""}
                 ${company ? `Company: ${company}` : ""}
                 Message: ${message}`,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      result,
      message: "Message Sent",
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
