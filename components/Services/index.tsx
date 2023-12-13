"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
// import { createContact } from "../../../lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AssessmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!name || !email || !phone || !company || !text) {
      // toast("Please fill all the fields!");
      return;
    }
    // const res = await createContact(name, email, phone, company, text);
    // if (res.success) {
    //   toast.success("Message Submitted successfully!");
    //   setPhone("");
    //   setPhone("");
    //   setEmail("");
    //   setText("");
    //   setCompany("");
    //   setName("");
    // } else {
    //   toast.error("Please try again later!");
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
      <Input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-none focus-visible:ring-0 border-0 border-b"
      />
      <Input
        type="text"
        placeholder="Mobile Number"
        value={phone}
        className="rounded-none focus-visible:ring-0 border-0 border-b"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        placeholder="Email Address"
        value={email}
        type="email"
        className="rounded-none focus-visible:ring-0 border-0 border-b"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Company Name"
        type="text"
        value={company}
        className="rounded-none focus-visible:ring-0 border-0 border-b"
        onChange={(e) => setCompany(e.target.value)}
      />
      <Input
        placeholder="Message"
        type="text"
        value={text}
        className="rounded-none focus-visible:ring-0 border-0 border-b"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        type="submit"
        className="bg-primary"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default AssessmentForm;
