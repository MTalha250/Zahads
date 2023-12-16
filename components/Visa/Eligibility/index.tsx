"use client";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import axios from "axios";

const Eligibility = () => {
  const [step, setStep] = useState(1);
  const [requirement, setRequirement] = useState("");
  const [uae, setUae] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    const response = await axios.post(`/api/eligibility`, {
      fname,
      lname,
      email,
      phone,
      uae,
      requirement,
    });
    toast.success(response.data.message);
    setStep(1);
    setRequirement("");
    setUae("");
    setFname("");
    setLname("");
    setEmail("");
    setPhone("");
    setLoading(false);
  };

  return (
    <div className="my-20">
      <h1 className="my-5 text-center font-bold text-3xl md:text-4xl text-secondary">
        Check Your Visa Eligibility
      </h1>
      <p className="text-gray-500 font-semibold my-2">Step {step} of 4</p>
      <Progress value={25 * step} />
      <div className="my-5 bg-gray-100 p-5">
        {step == 1 && (
          <div className="my-5 text-gray-500">
            <h2 className="my-3 font-semibold">
              Do you meet any of the following requirements?
              <sup className="text-red-500"> *</sup>
            </h2>
            <form
              className="flex flex-col space-y-2 text-sm"
              onSubmit={(e) => {
                e.preventDefault();
                requirement
                  ? setStep(2)
                  : toast.error("Select an option first");
              }}
            >
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="Your monthly salary is at least 30,000 AED"
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                Your monthly salary is at least 30,000 AED
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You're a director, general manager, or chairman of the board of
                  directors."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You're a director, general manager, or chairman of the board of
                directors.
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You have a 2 million AED fixed deposit with the bank."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You have a 2 million AED fixed deposit with the bank.
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You own property in the UAE worth AED 2 million."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You own property in the UAE worth AED 2 million.
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You and your spouse jointly own property in the UAE."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You and your spouse jointly own property in the UAE.
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You are the owner of one or more off-plan properties purchased
                  from authorised local real estate companies for at least AED 2
                  million."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You are the owner of one or more off-plan properties purchased
                from authorised local real estate companies for at least AED 2
                million.
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You are a medical doctor, specialist, scientist, innovator or
                  creative person in the fields of culture and arts."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You are a medical doctor, specialist, scientist, innovator or
                creative person in the fields of culture and arts.
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="You hold a doctoral degree (PhD)."
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                You hold a doctoral degree (PhD).
              </label>
              <label htmlFor="">
                <input
                  type="radio"
                  name="requirements"
                  value="None of the above"
                  onChange={(e) => setRequirement(e.target.value)}
                />{" "}
                None of the above
              </label>
              <div>
                <button className="my-3 bg-primary py-3 px-5 text-white rounded">
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step == 2 && (
          <div className="my-5 text-gray-500">
            <h2 className="my-3 font-semibold">
              Are you inside UAE?
              <sup className="text-red-500"> *</sup>
            </h2>
            <form
              className="flex flex-col space-y-2 text-sm"
              onSubmit={(e) => {
                e.preventDefault();
                uae ? setStep(3) : toast.error("Select an option first");
              }}
            >
              <label>
                <input
                  type="radio"
                  name="uae"
                  value="Yes"
                  onChange={(e) => setUae(e.target.value)}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="uae"
                  value="No"
                  onChange={(e) => setUae(e.target.value)}
                />{" "}
                No
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setStep(1);
                    setRequirement("");
                  }}
                  className="my-3 bg-primary py-3 px-5 text-white rounded"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="my-3 bg-primary py-3 px-5 text-white rounded"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step == 3 && (
          <div className="my-5 text-gray-500">
            <h2 className="my-3 font-semibold">
              Personal Information
              <sup className="text-red-500"> *</sup>
            </h2>
            <form
              className="flex flex-col space-y-2 text-sm"
              onSubmit={(e) => {
                e.preventDefault();
                fname && lname && email && phone
                  ? setStep(4)
                  : toast.error("Please fill all the fields");
              }}
            >
              <div className="flex space-x-5">
                <Input
                  placeholder="First Name"
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
                <Input
                  placeholder="Last Name"
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="flex space-x-5">
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setStep(2);
                    setUae("");
                  }}
                  className="my-3 bg-primary py-3 px-5 text-white rounded"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="my-3 bg-primary py-3 px-5 text-white rounded"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step == 4 && (
          <div className="my-5 text-gray-500">
            <h2 className="font-semibold text-center">
              Please take a moment to verify your information.
            </h2>
            <div className="text-sm">
              <h2 className="my-2 font-semibold">
                Do you meet any of the following requirements?
              </h2>
              <p>{requirement}</p>
              <h2 className="my-2 font-semibold">Are you inside UAE?</h2>
              <p>{uae}</p>
              <h2 className="my-2 font-semibold">Your Name</h2>
              <p>
                {fname} {lname}
              </p>
              <h2 className="my-2 font-semibold">what's your email address?</h2>
              <p>{email}</p>
              <h2 className="my-2 font-semibold">Phone</h2>
              <p>{phone}</p>
            </div>
            <div className="flex space-x-2">
              <button
                disabled={loading}
                onClick={() => setStep(3)}
                className="my-3 bg-primary py-3 px-5 text-white rounded"
              >
                Previous
              </button>
              <button
                disabled={loading}
                type="submit"
                className="my-3 bg-primary py-3 px-5 text-white rounded"
                onClick={handleSubmit}
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Eligibility;
