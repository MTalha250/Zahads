"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loader from "@/components/Loader/Loader";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!data.fname || !data.lname || !data.email || !data.message) {
        toast.error("Please fill all fields");
        return;
      }
      const response = await axios.post(`/api/contact`, {
        firstName: data.fname,
        lastName: data.lname,
        email: data.email,
        message: data.message,
      });
      toast.success("Message sent successfully");
      setData({ fname: "", lname: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 md:px-16 flex flex-col md:flex-row py-20 gap-5">
      <div className="w-full md:w-[45%] p-8 border rounded-lg flex flex-col">
        <h2 className="text-3xl mb-4">Contact Information</h2>
        <p className=" text-gray-600 mb-6">
          We’re here to assist you. Fill out the form below, and we’ll get back
          to you as soon as possible.
        </p>

        <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
          <HiPhone className="text-2xl text-[#556D1E]" />
          <div className="ml-4">
            <p className="text-sm font-medium">+1 455 1482 236</p>
          </div>
        </div>

        <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
          <HiMail className="text-2xl text-[#556D1E]" />
          <div className="ml-4">
            <p className="text-sm font-medium">Bluebase@mail.com</p>
          </div>
        </div>

        <div className="flex items-center mb-4 bg-secondary p-4 rounded-lg border">
          <HiLocationMarker className="text-2xl text-[#556D1E]" />
          <div className="ml-4">
            <p className="text-sm font-medium">
              16/9, Down Street Edinburgh, Scotland United Kingdom
            </p>
          </div>
        </div>

        <div className="mt-auto flex justify-start space-x-4">
          <a href="" className="border rounded-full p-2 border-black">
            <FaLinkedin className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
          <a href="" className="border rounded-full p-2 border-black">
            <FaWhatsapp className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
          <a href="" className="border rounded-full p-2 border-black">
            <FaInstagram className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
          <a href="" className="border rounded-full p-2 border-black">
            <FaFacebook className="text-xl text-gray-500 hover:text-gray-700 cursor-pointer" />
          </a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[55%] p-8 rounded-lg border border-t-8 border-t-[#556D1E]"
      >
        <div className="grid grid-cols-1 gap-6">
          {/* First Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Input
              placeholder="Enter your first name"
              type="text"
              name="fname"
              value={data.fname}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          {/* Last Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Input
              placeholder="Enter your last name"
              type="text"
              name="lname"
              value={data.lname}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <Textarea
              placeholder="Write your message"
              name="message"
              value={data.message}
              onChange={handleChange}
              className="w-full mt-1 border-gray-300 rounded-md bg-neutral-200"
            />
          </div>

          {/* Submit Button */}
          <Button
            disabled={loading}
            type="submit"
            className="w-fit bg-[#556D1E] text-white rounded-none mt-3 py-2 flex items-center justify-center"
          >
            {loading ? (
              <Loader size={25} color="#fff" />
            ) : (
              <div className="flex items-center">
                Submit
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
