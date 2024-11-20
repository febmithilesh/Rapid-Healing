import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/Home.png')] bg-no-repeat bg-cover bg-center opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10 text-center lg:text-left">
        {/* Header */}
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
        From Pain to Peak Performance.
        </h1>
        
        {/* Description */}
        <p className="text-sm lg:text-base">
          "Pain is your body’s way of telling you something’s wrong. Don’t ignore persistent pain. 
          Visit a physiotherapist to understand the root cause and get personalized care."
        </p>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Button title="See Services" />
        </div>
      </div>
    </div>
  );
};

export default Home;









