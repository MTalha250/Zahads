import React, { useState } from 'react';
//@ts-ignore
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '@/assets/formImg.png';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    consent: false,
  });

  const [toastActive, setToastActive] = useState(false); // State to track toast activity

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      consent: e.target.checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple toasts
    if (toastActive) {
      return;
    }

    // Validation check for required fields and consent checkbox
    const { name, phone, email, consent, businessType } = formData;
    if (!name || !phone || !email || !businessType) {
      setToastActive(true);
      toast.error('Please fill in all required fields.', {
        onClose: () => setToastActive(false), // Reset state when toast closes
      });
      return;
    }

    if (!consent) {
      setToastActive(true);
      toast.error('You must agree to the terms and privacy policy.', {
        onClose: () => setToastActive(false), // Reset state when toast closes
      });
      return;
    }

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear form fields
        setFormData({
          name: '',
          phone: '',
          email: '',
          businessType: '',
          consent: false,
        });

        // Show success toast
        setToastActive(true);
        toast.success('Form submitted successfully!', {
          onClose: () => setToastActive(false), // Reset state when toast closes
        });
      } else {
        setToastActive(true);
        toast.error('Failed to submit the form', {
          onClose: () => setToastActive(false), // Reset state when toast closes
        });
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setToastActive(true);
      toast.error('An error occurred while submitting the form', {
        onClose: () => setToastActive(false), // Reset state when toast closes
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#FFFDF5] p-8 lg:p-24 gap-8">
      <ToastContainer /> {/* Toast container to handle toast notifications */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
        <img
          src={img.src}
          alt="Left Section Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 w-full rounded-lg shadow-2xl p-10 bg-[#FFFDF5]">
        <h2 className="text-xl font-bold text-[#B2930C] mb-6">
          Your Future Starts Here
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Phone</label>
            <div className="flex">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              What type of business would you like to start?
            </label>
            <input
              type="text"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm">
                By submitting this form, you agree to the Terms and Privacy
                Policy of Zahads and consent to Zahads collecting your details and
                contacting you via email, phone, or WhatsApp. Please be aware
                that due to our 24/7 operations, you may receive a call after
                6pm UAE time.
              </span>
            </label>
          </div>

          <div className="flex justify-center">
            <button className="py-2 px-10 bg-gradient-to-r from-[#FBD62F] to-[#FDE787] text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
