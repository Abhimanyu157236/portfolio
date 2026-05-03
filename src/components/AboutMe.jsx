import React from 'react';
import { motion } from 'motion/react';

const AboutMe = () => {
  return (
    <div className='w-[90%] md:w-[80%] my-4'>

      {/* Heading */}
      <motion.div
        className='text-2xl md:text-3xl font-bold py-3 border-b border-slate-800'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="font-bold text-[#cbd5e1]">About</span>
        <span className="font-bold text-[#38bdf8]"> Me</span>
      </motion.div>

      {/* Text */}
      <motion.p
        className="py-5 px-3 text-[#cbd5e1] text-sm md:text-lg"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        I'm self taught <b>Fullstack developer</b> who started with frontend and never stopped learning.
        <br /><br />
        I enjoy building complete web applications - from clean, responsive UIs to REST APIs and <br />
        database design.<br /> I focus on writing maintainable code and creating seamless user experiences. <br /><br />
        I have a passion for learning new technologies and staying up-to-date with industry trends. <br /><br />
        Currently leveling up by building real-world projects with the <span className='text-indigo-400 font-bold'> MERN </span> stack,<br />
        because the best way to learn is to ship things.
      </motion.p>

    </div>
  );
}

export default AboutMe;