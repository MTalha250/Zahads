"use client";
import React from "react";
// import { PhoneIcon } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";
// import { useFormik } from "formik";
// import toast from "react-hot-toast";
// import axios from "axios";
// import Loader from "@/components/Loader/Loader";
import Hero from "@/components/contact/hero";
import Contact from "@/components/Home/ContactOld";

const page = () => {
  // const [loading, setLoading] = useState(false);

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     nationality: "",
  //     category: "",
  //     message: "",
  //   },
  //   onSubmit: async (values) => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.post("/api/contact", values);
  //       toast.success("Success! You will be contacted soon");
  //     } catch (error: any) {
  //       console.log(error);
  //       toast.error("Error! Please try again later");
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  // });

  return (
    <div>
      <Hero />
      <Contact />
      {/* <div className="md:px-40 px-8 my-5 w-full flex md:flex-row flex-col gap-20">
        <div className="md:w-1/2 w-full flex flex-col py-5">
          <div className="flex md:flex-row flex-col gap-5 ">
            <a
              href="tel:+971567517147"
              className="flex w-full flex-row gap-5 px-8 py-3 md:w-fit rounded-xl items-center bg-primary/5 text-primary"
            >
              <PhoneIcon size={24} className="" />
              <div className="flex flex-col">
                <p className="text-black font-semibold ">Call us at</p>
                <p className="">+971 56 7517147</p>
              </div>
            </a>
            <a
              href="https://wa.me/971567517147"
              className="flex flex-row gap-5 px-8 py-3 md:w-fit w-full rounded-xl items-center bg-primary/5 text-primary"
            >
              <BsWhatsapp size={24} className="" />
              <div className="flex flex-col">
                <p className="text-black font-semibold">Whatsapp us at</p>
                <p className="">+971 56 7517147</p>
              </div>
            </a>
          </div>
          <h3 className="md:text-2xl text-lg mt-7 font-semibold ">
            Send us a message
          </h3>
          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label htmlFor="firstName" className="font-semibold">
                  First Name
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  placeholder="Type your answer here..."
                  className="w-full rounded px-2 py-3  border"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="font-semibold">
                  Last Name
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Type your answer here..."
                  className="w-full rounded px-2 py-3  border"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <label htmlFor="email" className="font-semibold">
                  Email
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Type your answer here..."
                  className="w-full rounded px-2 py-3  border"
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-semibold">
                  Phone
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <input
                  type="text"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  name="phone"
                  className="w-full rounded px-2 py-3  border"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col">
                <label htmlFor="nationality" className="font-semibold">
                  Nationality
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <select
                  name="nationality"
                  className="py-3 mt-1 border rounded px-2"
                  value={formik.values.nationality}
                  onChange={formik.handleChange}
                >
                  <option>Albanian</option>
                  <option>Algerian</option>
                  <option>American</option>
                  <option>Andorran</option>
                  <option>Angolan</option>
                  <option>Antiguans</option>
                  <option>Argentinean</option>
                  <option>Armenian</option>
                  <option>Indian</option>
                  <option>Pakistani</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="category" className="font-semibold">
                  How can we help you?
                  <span className="text-primary text-xs font-normal italic">
                    {" "}
                    (Required)
                  </span>
                </label>
                <select
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  className="py-3 mt-1 border rounded px-2"
                >
                  <option>Business setup</option>
                  <option>Corporate services</option>
                  <option>General enquiry</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold">
                Message
                <span className="text-primary text-xs font-normal italic">
                  {" "}
                  (Required)
                </span>
              </label>
              <textarea
                value={formik.values.message}
                onChange={formik.handleChange}
                name="message"
                className="border px-2 py-3 resize-none"
                placeholder="Type your answer here..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-12 py-3 rounded-md text-white font-medium w-fit ${
                loading ? "bg-primary/50" : "bg-primary"
              }`}
            >
              {loading ? <Loader size={25} color="white" /> : "Submit"}
            </button>
          </form>
        </div>
        <div className="md:w-1/2 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68281887844!2d54.89782418606137!3d25.076280448702796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1720435011441!5m2!1sen!2s"
            loading="lazy"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default page;
