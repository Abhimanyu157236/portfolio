import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const roles = ["Fullstack Developer", "React Dev", "MERN Dev", "UI Builder"];

const TypeWriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-cyan-400"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const HeroSection = () => {
  return (
    <section className="flex overflow-hidden w-[90%] md:w-[80%] ">
      <div className=" mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        
        {/* LEFT — Text Content */}
        <div className="flex-1">
          
          {/* Main Heading — Typewriter */}
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <TypeWriter />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            who builds{" "}
            <span className="text-cyan-400 font-semibold">real-world</span>{" "}
            web apps with{" "}
            <span className="text-purple-400 font-semibold">MERN</span> stack
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ originX: 0 }}
          />

          {/* Bio */}
          <motion.p
            className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I am specialize in React, Javascript and modern UI designs - and
            now building fullstack apps with Node.js & MongoDB. I love turning
            ideas into real, working products.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="/Resume (14).pdf"
              download
              className="px-6 py-3 border border-gray-500 text-white font-semibold rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              whileHover={{ scale: 1.05, borderColor: "#a855f7", boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              Download Resume
            </motion.a>
          </div>
        </div>

        {/* RIGHT — Profile Photo */}
        <motion.div
          className="flex-shrink-0 relative"
          initial={{ opacity: 0, x: 60, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Glow ring */}
          <motion.div
            className="w-full absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Photo */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/40">
            <img
              src="/hero_img.png"
              alt="Abhimanyu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;