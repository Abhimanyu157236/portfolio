import React from "react";

const Projects = () => {
  return (
    <div className="w-[85%] my-4" id="projects">
      <hr className="gradient-line2" />
      <p className="text-2xl md:text-3xl font-bold py-3 border-b border-slate-800 text-[#cbd5e1]">
        Projects
      </p>
      <div className="w-full flex flex-wrap gap-8 justify-center py-5">
        <div className="w-[90%] md:w-[30%] p-2 shadow-[0_0_5px_#6eee] rounded-md">
          <img
            src="/projects/hustleboard.png"
            alt="hustleboard"
            className="rounded-md"
          />
           <p className="text-md font-bold text-[#a9effa] mt-4 mb-2 px-2"> HustleBoard - Task Manager </p>
            <p className="px-2 text-[#cbd5e1] text-xs">Tailwind CSS, Chart.Js and React.js</p>
          <div className="w-full flex flex-wrap justify-center gap-2 my-3">
            <button className="text-white py-2 w-[45%]  text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] "
        
            >
                <a href="https://hustle-board.vercel.app/"> ▶️ Live Demo</a>
               
            </button>
            <button
              className="text-white py-2 w-[45%]  text-centertransition-all duration-500 
         bg-slate-700 shadow-[0_0_5px_#f4bde8]
         rounded-[10px] hover:bg-[position:right_center]"
            >
              <a href="https://github.com/Abhimanyu157236/whisperInk">{"</>"} code</a>
            </button>
          </div>
        </div>

        <div className="w-[90%] md:w-[30%] p-2 shadow-[0_0_5px_#6eee] rounded-md">
          <img
            src="/projects/dealhunt.png"
            alt="dealhunt"
            className="rounded-md"
          />
           <p className="text-md font-bold text-[#a9effa] mt-4 mb-2 px-2"> DealHunt - E-Commerce Website</p>
            <p className="px-2 text-[#cbd5e1] text-xs">Tailwind CSS and React.js</p>
          <div className="w-full flex flex-wrap justify-center gap-2 my-3">
            <button className="text-white py-2 w-[45%]  text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] ">
              <a href="https://deal-hunt-azure.vercel.app/"> ▶️ Live Demo</a>
            </button>
            <button
              className="text-white py-2 w-[45%]  text-centertransition-all duration-500 
         bg-slate-700 shadow-[0_0_5px_#f4bde8]
         rounded-[10px] hover:bg-[position:right_center]"
            >
          <a href="https://github.com/Abhimanyu157236/DealHunt">{"</>"} code</a>
            </button>
          </div>
        </div>

        <div className="w-[90%] md:w-[30%] p-2 shadow-[0_0_5px_#6eee] rounded-md">
          <img
            src="/projects/repwise.png"
            alt="whisperInk"
            className="rounded-md"
          />
           <p className="text-md font-bold text-[#a9effa] mt-4 mb-2 px-2"> RepWise- Fitness Tracker Website</p>
            <p className="px-2 text-[#cbd5e1] text-xs">Tailwind CSS, Framer-motion, Charts.js, React.js and appwrite</p>
          <div className="w-full flex flex-wrap justify-center gap-2 my-3">
            <button className="text-white py-2 w-[45%]  text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] ">
             <a href="https://repwise-theta.vercel.app/"> ▶️ Live Demo</a>
            </button>
            <button
              className="text-white py-2 w-[45%]  text-centertransition-all duration-500 
         bg-slate-700 shadow-[0_0_5px_#f4bde8]
         rounded-[10px] hover:bg-[position:right_center]"
            >
             <a href="https://github.com/Abhimanyu157236/RepWise">{"</>"} code</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
