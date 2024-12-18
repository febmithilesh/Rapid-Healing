import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between py-8 px-5 md:px-32">
        {/* Section 1: About */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h1 className="font-semibold text-xl pb-4">Rapid Healing</h1>
          <p className="text-sm">
            Our team of dedicated doctors specializes in orthopedics, cardiology, pediatrics, neurology, dermatology, and more, delivering exceptional care tailored to your needs.
          </p>
        </div>

        {/* Section 2: About Links */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-xl pb-4">About</h1>
          <nav className="flex flex-col gap-2">
            {["About", "Services", "Blog's"].map((text, index) => (
              <Link
                key={index}
                to={text.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-hoverColor transition-all cursor-pointer"
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Section 3: Services */}
        <div className="mb-6 md:mb-0">
          <h1 className="font-medium text-xl pb-4">Services</h1>
          <nav className="flex flex-col gap-2">
            {["Lab Test", "Health Check", "Heart Health"].map((text, index) => (
              <Link
                key={index}
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-hoverColor transition-all cursor-pointer"
              >
                {text}
              </Link>
            ))}
          </nav>
        </div>

        {/* Section 4: Contact */}
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4">Get Appointment</h1>
          <nav className="flex flex-col gap-2 text-sm">
            <span className="hover:text-hoverColor transition-all cursor-pointer">
              123 Elm Street, Suite 456, Springfield, IL 62701, United States
            </span>
            <a
              href="mailto:support@care.com"
              className="hover:text-hoverColor transition-all"
            >
              support@care.com
            </a>
            <a
              href="tel:+1234567890"
              className="hover:text-hoverColor transition-all"
            >
              +123-456-7890
            </a>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6">
        <p className="text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} Developed by{" "}
          <span className="text-hoverColor font-semibold">Mithilesh Kumar</span>{" "}
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
