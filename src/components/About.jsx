import React from "react";
import img from "../assets/img/adoctor.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-8">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center lg:text-start">
          About Our Physiotherapy Services
        </h1>
        <p className="text-base lg:text-lg text-justify lg:text-start leading-relaxed">
          At Rapid Healing, we specialize in delivering top-quality physiotherapy services to help you regain mobility, reduce pain, and enhance overall physical function. Whether you’re recovering from an injury, surgery, or dealing with chronic pain, our experienced physiotherapists are here to guide you through every step of your recovery.
        </p>
        <p className="text-base lg:text-lg text-justify lg:text-start leading-relaxed">
          Our team is dedicated to providing personalized care tailored to your unique needs. From injury prevention to post-operative rehabilitation, we are committed to helping you achieve your health and fitness goals.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded-lg object-cover w-full h-auto"
          src={img}
          alt="A physiotherapist assisting a patient"
        />
      </div>
    </div>
  );
};

export default About; 





