import React from "react";

const ContactMe = () => {
  return (
    <div className="w-[85%] my-4 flex justify-center">
      <div className="w-full md:w-1/2 ">
        <p className=" font-bold text-[#cbd5e1] text-center text-2xl md:text-3xl py-3 border-b border-slate-600">
          Get In Touch
        </p>
        <p className="py-3 text-[#cbd5e1] text-center text-sm md:text-lg">
          Interested in working together? Let's build something great!
        </p>
        <div className="w-full flex flex-wrap justify-center gap-3 my-3">
          <button className="text-white py-2 px-4 md:px-8 text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] flex items-center gap-3">
            <img
              src="/contact/icons8-gmail-logo-48.png"
              alt="gmail"
              className="w-6 md:w-8"
            />
            <a href="mailto:abhimanyupandey1572@gmail.com">Email Me</a>
          </button>
          <button
            className="text-white py-2 px-4 md:px-8 text-centertransition-all duration-500 
         bg-slate-700 shadow-[0_0_5px_#eee]
         rounded-[10px] flex items-center gap-3 hover:bg-[position:right_center]"
          >
            {" "}
            <img
              src="/contact/icons8-github-logo-30.png"
              alt="github"
              className="w-6 md:w-8"
            />
            <a href="https://github.com/Abhimanyu157236"> Github</a>
          </button>
          <button
            className="text-white py-2 px-4 md:px-8 text-centertransition-all duration-500 flex items-center gap-3
         bg-btn-grad bg-[length:200%_auto] shadow-[0_0_5px_#f4bde8]
         rounded-[10px] hover:bg-[position:right_center]"
          >
            <img
              src="/contact/icons8-linkedin-logo-48.png"
              alt="linkedin"
              className="w-6 md:w-8"
            />{" "}
            <a href="https://www.linkedin.com/in/abhimanyu-pandey-4474431b5/">
              LinkedIn
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
