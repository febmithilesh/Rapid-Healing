import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import GetAppointment from "../models/GetAppointment";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-20 text-white">
      <div className="flex justify-between items-center p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <h1 className="text-lg sm:text-xl font-semibold">Rapid Healing</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-base font-medium gap-8">
          {["home", "about", "services", "blog", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Get Appointment
          </button>
        </div>

        {showForm && <GetAppointment closeForm={closeForm} />}

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={28} onClick={handleChange} />
          ) : (
            <AiOutlineMenu size={28} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 text-center font-medium text-lg pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300 ease-in-out`}
      >
        {["home", "about", "services", "blog", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}

        <div className="mt-4">
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out mx-auto"
            onClick={openForm}
          >
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import Button from "../layouts/Button";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// import GetAppointment from "../models/GetAppointment";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   const openForm = () => {
//     setShowForm(true);
//     setMenu(false);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className=" fixed w-full z-10 text-white">
//       <div>
//         <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
//           <div className=" flex flex-row items-center cursor-pointer">
//             <Link to="home" spy={true} smooth={true} duration={500}>
//               <h1 className=" text-2xl font-semibold">Rapid Healing.</h1>
//             </Link>
//           </div>

//           <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" hover:text-hoverColor transition-all cursor-pointer"
//             >
//               Home
//             </Link>
//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" hover:text-hoverColor transition-all cursor-pointer"
//             >
//               About 
//             </Link>
//             <Link
//               to="services"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" hover:text-hoverColor transition-all cursor-pointer"
//             >
//               Services
//             </Link>
//             <Link
//               to="blog"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" hover:text-hoverColor transition-all cursor-pointer"
//             >
//               Blog's
//             </Link>
//             <Link
//               to="contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" hover:text-hoverColor transition-all cursor-pointer"
//             >
//             Contact
//             </Link>
//           </nav>

//           <div className=" hidden lg:flex">
//             <button
//               className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
//               onClick={openForm}
//             >
//               Get Appointment 
//             </button>
//           </div>

//           {showForm && <GetAppointment closeForm={closeForm} />}

//           <div className=" lg:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={28} onClick={handleChange} />
//             ) : (
//               <AiOutlineMenu size={28} onClick={handleChange} />
//             )}
//           </div>
//         </div>
//         <div
//           className={`${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
//         >
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             About 
//           </Link>
//           <Link
//             to="services"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Services
//           </Link>
//           <Link
//             to="contact"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Contact
//           </Link>
//           <Link
//             to="blog"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Blog
//           </Link>

//           <div className=" lg:hidden">
//             <button
//               className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
//               onClick={openForm}
//             >
//               Contact 
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




