"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

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
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (!data.fname || !data.lname || !data.email || !data.message) {
      toast.error("Please fill all fields");
      return;
    }
    const response = await axios.post(`/api/contact`, data);
    toast.success(response.data.message);
    setData({
      fname: "",
      lname: "",
      email: "",
      message: "",
    });
    setLoading(false);
  };

  return (
    <div className="my-10 bg-white z-20 mx-8 md:mx-16 flex flex-col md:flex-row md:w-full rounded-3xl pb-10">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold font-bask">
          Reach out to us <span className=" text-primary italic">Today!</span>
        </h1>
        <Input
          placeholder="First Name"
          type="text"
          className="focus-visible:ring-0 py-2 my-3 lg:my-5 2xl:my-8 border-0 border-b border-black  shadow-none rounded-none 2xl:text-xl"
          name="fname"
          value={data.fname}
          onChange={handleChange}
        />
        <Input
          placeholder="Last Name"
          type="text"
          className="focus-visible:ring-0 py-2  my-3 lg:my-5  2xl:my-8  border-0 border-b border-black  shadow-none rounded-none 2xl:text-xl"
          name="lname"
          value={data.lname}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          type="email"
          className="focus-visible:ring-0 py-2  my-3 lg:my-5 2xl:my-8 border-0 border-b border-black  shadow-none rounded-none 2xl:text-xl"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <Textarea
          placeholder="Message"
          className="focus-visible:ring-0 py-2  my-3 lg:my-5 2xl:my-8 border-0 border-b border-black  shadow-none rounded-none 2xl:text-xl"
          name="message"
          value={data.message}
          onChange={handleChange}
        />
        <Button
          disabled={loading}
          type="submit"
          className="mt-3 bg-primary hover:bg-yellow-700 transition duration-300 px-8 rounded-full"
        >
          {loading ? "Sending" : "Send"}
        </Button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68282299396!2d54.897820800263595!3d25.076280447613374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1702522048789!5m2!1sen!2s"
        loading="lazy"
        className="mt-10 h-[400px] md:ml-10 md:w-1/3"
      ></iframe>
    </div>
  );
};

export default Contact;
