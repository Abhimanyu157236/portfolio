import React from "react";
import "./hr.css";

const HeroSection = () => {
  
  return (
    <div className=" md:flex w-[85%]">
      <div className="w-full md:w-[60%] pt-6 md:pt-28">
        <span className=" mx-auto ">
          <h1 className=" text-3xl text-center md:text-start md:text-7xl font-bold text-[#f8fafc]">
            Frontend Developer
          </h1>
          <div className="my-2 text-xl text-center md:text-start md:text-3xl">
            <span className=" font-bold text-[#cbd5e1]">who builds</span>
            <span className=" font-bold text-[#38bdf8]"> clean</span>
            <span className=" font-bold text-[#cbd5e1]">, fast & mordern</span>
            <span className=" font-bold text-purple-600">
              {" "}
              web experiences.
            </span>
          </div>
        </span>
        {
        //visible on laptop, tablet
        }
        <div className="my-10 hidden md:block">
          <hr className="gradient-line1" />
          <p className="py-5 px-3 text-[#cbd5e1] text-sm md:text-lg">
            I am specialize in React, Javascript and mordern UI designs. <br />I
            love turning ideas into interactive products.
          </p>
          <div className="flex gap-1 md:gap-5">
           <a href="#projects"> <button
              className="text-white py-2 px-4 md:px-8 text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center]"
            >
              View Projects
            </button></a>
           <a href="/Resume.pdf" download> <button  className="text-white py-2 px-4 md:px-8 text-center  rounded-md shadow-[0_0_5px_#eee]"
            >Download Resume</button></a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] pt-6 flex justify-center">
        <img
          src="/hero_img.png"
          alt="hero"
          className="w-[70%] md:w-[75%] m-auto rounded-full shadow-2xl shadow-gray-500"
        />
      </div>
      {
        //visible only on mobile
        }
        <div className="my-10 md:hidden">
          <hr className="gradient-line1" />
          <p className="py-5 px-3 text-[#cbd5e1] text-sm md:text-lg">
            I am specialize in React, Javascript and mordern UI designs. <br />I
            love turning ideas into interactive products.
          </p>
          <div className="flex gap-1 md:gap-5">
            <a href="#projects"> <button
              className="text-white py-2 px-4 md:px-8 text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center]"
            >
              View Projects
            </button></a>
            <a href="/Resume.pdf" download> <button  className="text-white py-2 px-4 md:px-8 text-center  rounded-md shadow-[0_0_5px_#eee]"
            >Download Resume</button></a>
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
