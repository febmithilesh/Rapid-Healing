import React, { useState } from "react";
import Button from "../layouts/Button";

const GetAppointment = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call here
    console.log("Appointment Booked:", formData);
    setIsSubmitted(true); // Show success message
    setFormData({ userFirstName: "", userLastName: "", userEmail: "", userNumber: "" }); // Reset form fields
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        {isSubmitted ? (
          <div className="w-80 md:w-96 bg-white p-5 rounded-xl text-center">
            <h1 className="text-4xl font-semibold text-green-500 mb-4">
              Success!
            </h1>
            <p className="text-lg text-gray-700">
              Your appointment has been booked successfully.
            </p>
            <button
              className="mt-5 bg-green-500 text-white px-10 py-2 rounded-md active:bg-green-700"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        ) : (
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
                name="userFirstName"
                value={formData.userFirstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="userLastName"
                value={formData.userLastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="email"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="number"
                name="userNumber"
                value={formData.userNumber}
                onChange={handleChange}
                placeholder="Phone No."
                required
              />
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                className="bg-backgroundColor text-white px-10 py-2 rounded-md active:bg-green-500"
              >
                Book Appointment
              </button>
              <button
                type="button"
                className="bg-red-500 text-white px-10 py-2 rounded-md active:bg-red-700"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default GetAppointment;
