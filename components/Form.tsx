"use client";

import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "./Loader/Loader";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    let text = message;
    if (!name || !email || !phone || !company || !text) {
      toast.error("Please fill all the fields!");
      return;
    }
    try {
      const res = await axios.post("/api/contact", {
        firstName: name,
        email,
        phone,
        message: text,
        company,
        category: service,
      });
      toast.success("Message Submitted successfully!");
      setPhone("");
      setPhone("");
      setEmail("");
      setCompany("");
      setMessage("");
      setName("");
    } catch (error) {
      toast.error("Please try again later!")
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white flex rounded-md flex-col h-fit gap-4 w-full  p-8 border border-gray-400 border-0.5">
      <h1 className="text-primary border-b w-fit border-secondary text-xl">
        Get Free Consultation
      </h1>
      <Input
        type="text"
        className="bg-gray-200 outline-none border-none ring-0 text-secondary placeholder:text-secondary/70"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        className="bg-gray-200  outline-none border-none ring-0 text-secondary placeholder:text-secondary/70"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        className="bg-gray-200 outline-none border-none ring-0 text-secondary placeholder:text-secondary/70"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Company"
        className="bg-gray-200 outline-none border-none ring-0 text-secondary placeholder:text-secondary/70"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <select
        className="bg-gray-200 outline-none rounded-md text-sm py-3 px-3 border-none ring-0 text-secondary/70 placeholder:text-secondary/70"
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">Select Service</option>
        <option value="Business Setup">Business Setup</option>
        <option value="Accounting">Accounting</option>
        <option value="VAT">TAX</option>
        <option value="Business Consulting">Software</option>
        <option value="Audit">Audit</option>
        <option value="Other">Other</option>
      </select>
      <Input
        type="text"
        placeholder="Message"
        className="bg-gray-200 outline-none border-none ring-0 text-secondary placeholder:text-secondary/70"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        className=" bg-secondary text-white hover:bg-secondary/90 hover:text-primary/90"
        onClick={() => {
          handleSubmit();
        }}
      >
        {loading ? <Loader size={25} color="#b2913b" /> : "Get Free Assessement"}
      </Button>
    </div>
  );
};

export default Form;
