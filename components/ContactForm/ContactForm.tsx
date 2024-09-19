import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const ContactForm = (
  { backgroundColor, title, buttonColor }: {
    buttonColor: string;
    title: string;
    backgroundColor: string;
  },
) => {

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nationality, setNationality] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/contact", {
        firstName: name,
        phone,
        email,
        nationality,
        message
      })
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);

    }
  }
  return (
    <form
      className=" px-8 py-10 flex flex-col gap-3 sticky top-32 rounded-xl"
      style={{ backgroundColor: backgroundColor }}
    >
      <h3 className="font-bold text-gray-900 text-center">{title}</h3>
      <div className="">
        <label htmlFor="firstName">
          Name<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <div className="w-full flex flex-row gap-3 mt-2">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full rounded px-2 py-3"
          />
          <input
            type="text"
            className="w-full rounded px-2 py-3"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone">
          Phone<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <input
          type="number"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="w-full rounded px-2 py-3 mt-2"
        />
      </div>
      <div>
        <label htmlFor="email">
          Email<span className="text-primary text-xs italic">(Required)</span>
        </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full rounded px-2 py-3 mt-2"
          placeholder="Type your answer here..."
        />
      </div>
      <div>
        <label htmlFor="nationality">
          Nationality<span className="text-primary text-xs italic">
            (Required)
          </span>
        </label>
        <input
          type="text"
          name="nationality"
          onChange={(e) => setNationality(e.target.value)}
          value={nationality}
          className="w-full px-2 py-3 mt-2 rounded"
        />
      </div>
      <div>
        <label htmlFor="message">
          Message<span className="text-primary text-xs italic ">
            (Required)
          </span>
        </label>
        <textarea
          rows={5}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="w-full rounded px-2 py-3 mt-2"
          placeholder="Type your answer here..."
        />
      </div>
      <button onClick={(e) => { e.preventDefault(); handleSubmit() }} className="px-12 py-3 rounded-md text-white font-medium w-fit" style={{ backgroundColor: buttonColor }}>
        {loading ? <Loader size={25} color="white" /> : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
