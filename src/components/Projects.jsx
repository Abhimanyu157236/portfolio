import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  const cards = [
    {
      img: "/projects/hustleboard.png",
      alt: "hustleboard",
      title: "HustleBoard - Task Manager",
      desc: "A Fullstack task management app with JWT authentication and real-time data visualization",
      tech: "React.js, Node.js, MongoDB, Express, JWT, Bcrypt",
      demo: "https://hustle-board.vercel.app/",
      code: "https://github.com/Abhimanyu157236/HustleBoard",
    },
    {
      img: "/projects/dealhunt.png",
      alt: "dealhunt",
      title: "DealHunt - E-Commerce Website",
      desc: "A front-end e-commerce website with product listing, search, and responsive design",
      tech: "Tailwind CSS and React.js",
      demo: "https://deal-hunt-azure.vercel.app/",
      code: "https://github.com/Abhimanyu157236/DealHunt",
    },
    {
      img: "/projects/repWise2.0.png",
      alt: "whisperInk",
      title: "RepWise- Fitness Tracker Web-App",
      desc: "A full-stack fitness tracking app with user authentication, workout logging, and data visualization using Charts.js & recharts",
      tech: "React.js, Node.js, MongoDB, Express, JWT, Bcrypt",
      demo: "https://rep-wise.vercel.app/",
      code: "https://github.com/Abhimanyu157236/RepWise",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] my-4" id="projects">
      <hr className="gradient-line2" />

      {/* Heading */}
      <motion.p
        className="text-2xl md:text-3xl font-bold py-3 border-b border-slate-800 text-[#cbd5e1]"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Projects
      </motion.p>

      <div className="w-full flex flex-wrap gap-8 justify-center py-5">
        {cards.map((project, i) => (
          <motion.div
            key={i}
            className="w-[90%] md:w-[30%] p-2 bg-gradient-to-br from-sky-400/10 via-sky-700/40 to-sky-200/40 shadow-inner shadow-[_#6eee] rounded-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <img src={project.img} alt={project.alt} className="rounded-md" />
            <h1 className="text-lg font-bold text-[#a9effa] mt-4 mb-2 px-2">
              {project.title}
            </h1>
            <h2 className="px-2 mb-4 text-[#cbd5e1] font-semibold text-xs md:text-sm">
              {project.desc}
            </h2>
            <p className="px-2 text-[#cbd5e1] text-xs">{project.tech}</p>
            <div className="w-full flex flex-wrap justify-center gap-2 my-3">
              <button className="text-white py-2 w-[45%] text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center]">
                <a href={project.demo}> ▶️ Live Demo</a>
              </button>
              <button className="text-white py-2 w-[45%] transition-all duration-500 bg-slate-700 shadow-[0_0_5px_#f4bde8] rounded-[10px] hover:bg-[position:right_center]">
                <a href={project.code}>{"</>"} code</a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;