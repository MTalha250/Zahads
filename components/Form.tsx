"use client";

import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
// import {createContact} from "../../lib/utils"
import toast from "react-hot-toast";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    let text = message;
    if (!name || !email || !phone || !company || !text) {
      toast.error("Please fill all the fields!");
    }
    // const res = await createContact(
    //   name,
    //   email,
    //   phone,
    //   company,
    //   text
    // );
    // if (res.success) {
    //   toast.success("Message Submitted successfully!");
    //   setPhone("");
    //   setPhone("");
    //   setEmail("");
    //   setCompany("");
    //   setMessage("");
    //   setName("");
    // }
    // else {
    //   toast.error("Please try again later!")
    // }
  };

  return (
    <div className="bg-white flex flex-col h-fit gap-4 w-fit glass p-8 border border-gray-400 border-0.5">
      <h1 className="text-white border-b w-fit border-primary text-xl">
        Get Free Assessement
      </h1>
      <Input
        type="text"
        className="glass outline-none border-none ring-0 text-white placeholder:text-gray-300"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        className="glass outline-none border-none ring-0 text-white placeholder:text-gray-300"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="tel"
        className="glass outline-none border-none ring-0 text-white placeholder:text-gray-300"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Company"
        className="glass outline-none border-none ring-0 text-white placeholder:text-gray-300"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Message"
        className="glass outline-none border-none ring-0 text-white placeholder:text-gray-300"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
      className=" bg-secondary text-primary hover:bg-primary hover:text-secondary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Get Free Assessement
      </Button>
    </div>
  );
};

export default Form;
