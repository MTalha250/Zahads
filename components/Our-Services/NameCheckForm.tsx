import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NameCheckForm: React.FC = () => {
  const [formData, setFormData] = useState({
    proposedCompanyName: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    businessActivity: '',
    startBusinessDate: 'Immediately',
  });

  const [toastActive, setToastActive] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (toastActive) return;

    const {
      proposedCompanyName,
      fullName,
      email,
      phoneNumber,
      businessActivity,
    } = formData;
    if (
      !proposedCompanyName ||
      !fullName ||
      !email ||
      !phoneNumber ||
      !businessActivity
    ) {
      setToastActive(true);
      toast.error('Please fill in all required fields.', {
        onClose: () => setToastActive(false),
      });
      return;
    }

    try {
      const response = await fetch('/api/namecheckform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          proposedCompanyName: '',
          fullName: '',
          email: '',
          phoneNumber: '',
          alternatePhoneNumber: '',
          businessActivity: '',
          startBusinessDate: 'Immediately',
        });
        setToastActive(true);
        toast.success('Form submitted successfully!', {
          onClose: () => setToastActive(false),
        });
      } else {
        setToastActive(true);
        toast.error('Failed to submit the form', {
          onClose: () => setToastActive(false),
        });
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setToastActive(true);
      toast.error('An error occurred while submitting the form', {
        onClose: () => setToastActive(false),
      });
    }
  };

  return (
    <div className="bg-[#FFFDF5] py-12 flex flex-col items-center w-full">
      <ToastContainer />
      <button className="mb-8 py-3 px-8 bg-gradient-to-r from-[#735F09] to-[#EEC50E] text-black rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <i> TALK TO US</i>
      </button>
      <div className="w-full max-w-screen-xl p-8 bg-gradient-to-b from-[#735F09] to-[#EEC50E] rounded-lg shadow-lg">
        <h2 className="text-3xl text-white mb-4 text-center">
          GET YOUR <span className="text-white">FREE NAME CHECK</span>
        </h2>
        <p className="text-white text-center mb-8">
          Make sure your company name is unique and available with our <br />{' '}
          business name check feature.
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-white mb-2">
              Proposed Company Name{' '}
              <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              name="proposedCompanyName"
              value={formData.proposedCompanyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Your Full Name <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Email Address <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Phone Number <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Alternate Phone Number
            </label>
            <input
              type="text"
              name="alternatePhoneNumber"
              value={formData.alternatePhoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Business Activity <span className="text-red-500">(Required)</span>
            </label>
            <input
              type="text"
              name="businessActivity"
              value={formData.businessActivity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-white mb-2">
              When do you wish to start your business?
            </label>
            <select
              name="startBusinessDate"
              value={formData.startBusinessDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B2930C]"
            >
              <option>Immediately</option>
              <option>Within 3 months</option>
              <option>Within 6 months</option>
              <option>More than 6 months</option>
            </select>
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="py-3 px-8 bg-black text-white rounded-full text-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              APPLY NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NameCheckForm;
