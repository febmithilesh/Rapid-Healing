// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     consent: false,
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.consent) {
//       console.log("Form Data Submitted:", formData);
//       setIsSubmitted(true);
//     } else {
//       alert("Please agree to be contacted.");
//     }
//   };

//   const handleClose = () => {
//     setIsSubmitted(false);
//     setFormData({
//       name: "",
//       phone: "",
//       consent: false,
//     });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full flex flex-col md:flex-row">
//         {/* Left Side Content */}
//         <div className="bg-green-500 text-white p-6 md:p-8 flex-1 flex flex-col justify-center">
//           <h2 className="text-2xl font-bold mb-4">Welcome to Rapid Healing</h2>
//           <p className="text-sm">
//             Book your consultation now for a healthier and pain-free lifestyle.
//           </p>
//           <p className="text-sm mt-4">
//             <strong>Contact:</strong> +91 93543 73641
//           </p>
//         </div>

//         {/* Right Side Form */}
//         <div className="p-6 md:p-8 flex-1">
//           {isSubmitted ? (
//             <div className="text-center">
//               <h2 className="text-2xl font-bold text-green-500 mb-4">
//                 Thank You!
//               </h2>
//               <p className="text-gray-700 mb-4">
//                 We’ll contact you shortly to confirm your booking.
//               </p>
//               <button
//                 onClick={handleClose}
//                 className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 active:bg-red-700"
//               >
//                 Close
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <h1 className="text-2xl font-semibold text-center text-gray-800">
//                 Book an Appointment
//               </h1>
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   required
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Your Phone Number"
//                   required
//                   className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
//                 />
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   id="consent"
//                   checked={formData.consent}
//                   onChange={handleChange}
//                   className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
//                 />
//                 <label htmlFor="consent" className="ml-2 text-gray-700 text-sm">
//                   I agree to be contacted for booking confirmation.
//                 </label>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white py-3 rounded-lg font-medium shadow hover:bg-green-600 active:bg-green-700"
//               >
//                 Submit
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;





import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.consent) {
      console.log("Form Data Submitted:", formData);
      setIsSubmitted(true);
    } else {
      alert("Please agree to be contacted.");
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      consent: false,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Side Content */}
        <div className="bg-green-500 text-white p-6 md:p-8 flex-1 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Welcome to Rapid Healing
          </h2>
          <p className="text-sm lg:text-base">
            Book your consultation now for a healthier and pain-free lifestyle.
          </p>
          <p className="text-sm lg:text-base mt-4">
            <strong>Contact:</strong> +91 93543 73641
          </p>
        </div>

        {/* Right Side Form */}
        <div className="p-6 md:p-8 flex-1">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-green-500 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-4">
                We’ll contact you shortly to confirm your booking.
              </p>
              <button
                onClick={handleClose}
                className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 active:bg-red-700"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h1 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800">
                Book an Appointment
              </h1>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-5 w-5 text-green-500 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="consent" className="ml-2 text-gray-700 text-sm">
                  I agree to be contacted for booking confirmation.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium shadow hover:bg-green-600 active:bg-green-700"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

