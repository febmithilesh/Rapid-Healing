import React from "react";
import img from "../assets/img/adoctor.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Our Physiotherapy Services</h1>
        <p className=" text-justify lg:text-start">
        Rapid Healing specialize in delivering top-quality physiotherapy services to help you regain mobility, reduce pain, and enhance overall physical function. Whether you’re recovering from an injury, surgery, or dealing with chronic pain, our experienced physiotherapists are here to guide you through every step of your recovery.
        </p>
        <p className="text-justify lg:text-start">
        
        At Rapid Healing  we specialize in delivering expert physiotherapy care to help you regain your strength, mobility, and confidence. Our experienced physiotherapists are dedicated to providing personalized care for a wide range of conditions, ensuring that every patient receives the attention they deserve.


        </p>
        <p className="text-justify lg:text-start">
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;