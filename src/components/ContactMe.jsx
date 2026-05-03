import React from "react";
import { motion } from "motion/react";

const ContactMe = () => {
  const buttons = [
    {
      img: "/contact/icons8-gmail-logo-48.png",
      alt: "gmail",
      label: "Email Me",
      href: "mailto:abhimanyupandey1572@gmail.com",
      className: "text-white py-2 px-4 md:px-8 text-center rounded-md transition-all duration-500 bg-[linear-gradient(to_right,#1A2980_0%,#26D0CE_51%,#1A2980_100%)] bg-[length:200%_auto] hover:bg-[position:right_center] flex items-center gap-3",
    },
    {
      img: "/contact/icons8-github-logo-30.png",
      alt: "github",
      label: "Github",
      href: "https://github.com/Abhimanyu157236",
      className: "text-white py-2 px-4 md:px-8 transition-all duration-500 bg-slate-700 shadow-[0_0_5px_#eee] rounded-[10px] flex items-center gap-3 hover:bg-[position:right_center]",
    },
    {
      img: "/contact/icons8-linkedin-logo-48.png",
      alt: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhimanyu-pandey-4474431b5/",
      className: "text-white py-2 px-4 md:px-8 transition-all duration-500 flex items-center gap-3 bg-btn-grad bg-[length:200%_auto] shadow-[0_0_5px_#f4bde8] rounded-[10px] hover:bg-[position:right_center]",
    },
  ];

  return (
    <div className="w-[90%] md:w-[80%] my-4 flex justify-center">
      <div className="w-full md:w-1/2">

        {/* Heading */}
        <motion.p
          className="font-bold text-[#cbd5e1] text-center text-2xl md:text-3xl py-3 border-b border-slate-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Get In Touch
        </motion.p>

        {/* Subtext */}
        <motion.p
          className="py-3 text-[#cbd5e1] text-center text-sm md:text-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          Interested in working together? Let's build something great!
        </motion.p>

        {/* Buttons */}
        <div className="w-full flex flex-wrap justify-center gap-3 my-3">
          {buttons.map((btn, i) => (
            <motion.button
              key={i}
              className={btn.className}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <img src={btn.img} alt={btn.alt} className="w-6 md:w-8" />
              <a href={btn.href}>{btn.label}</a>
            </motion.button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactMe;