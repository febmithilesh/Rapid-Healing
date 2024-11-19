import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import GetAppointment from "../models/GetAppointment";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);
  const openForm = () => {
    setShowForm(true);
    setMenu(false); // Close menu when opening form
  };
  const closeForm = () => setShowForm(false);

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        {/* Navbar Header */}
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* Logo */}
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold">Rapid Healing.</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
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

          {/* Appointment Button for Desktop */}
          <div className="hidden lg:flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Get Appointment
            </button>
          </div>

          {/* Toggle Menu Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={toggleMenu} aria-label="Close menu" />
            ) : (
              <AiOutlineMenu size={28} onClick={toggleMenu} aria-label="Open menu" />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-medium text-lg text-center pt-8 pb-4 gap-6 w-full h-fit transition-transform duration-300`}
          aria-hidden={!menu}
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

          {/* Appointment Button for Mobile */}
          <button
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
            onClick={openForm}
          >
            Get Appointment
          </button>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showForm && <GetAppointment closeForm={closeForm} />}
    </div>
  );
};

export default Navbar;





