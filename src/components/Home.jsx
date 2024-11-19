// import React from "react";
// import Button from "../layouts/Button";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
 
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h2 className="text-5xl font-bold leading-tight">
        Pain signals physiotherapist.
        </h2>
        <p>
        "Pain is your body’s way of telling you something’s wrong. Don’t ignore persistent pain. Visit a physiotherapist to understand the root cause and get personalized care."
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;



