import React, { useState } from 'react';

const GetAppointment = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your form submission logic here (e.g., API call)
    alert('Appointment Booked Successfully!');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          onSubmit={handleSubmit}
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
              required
            />
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-green-500"
            >
              Book Appointment
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-10 rounded-md active:bg-red-700"
              onClick={close}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAppointment;
