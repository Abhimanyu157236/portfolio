import React from 'react';
import { Check } from 'lucide-react';
import './hr.css'
import { motion } from 'motion/react';

const MyRole = () => {
    
  const WhatICanDo = [
    "Build responsive frontend using React & Tailwind CSS.",
    "Sevelop REST APIs with Node.js & Express.",
    "Work with MongoDB & Mongoose for database design.",
    "Implement JWT based authentication & authorization.", 
    "Creates reusable components.",
    "Optimize UI for performance.",
    "Write clean and readable code.",
    "Convert Figma designs into pixel-perfect web pages."
  ]

  return (
    <div className='w-[90%] md:w-[80%] my-4'>
      <hr className='gradient-line2'/>

      {/* Heading */}
      <motion.div
        className='text-2xl md:text-3xl font-bold py-3 border-b border-slate-800'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="font-bold text-[#cbd5e1]">What I Can</span>
        <span className="font-bold text-[#38bdf8]"> Do</span>
      </motion.div>

      {/* List items */}
      {WhatICanDo.map((item, index) => (
        <motion.div
          key={index}
          className='flex items-center gap-2'
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false}}
          transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
        >
          <Check color="#22c55e" />
          <p className="py-3 text-[#cbd5e1] text-sm md:text-lg">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default MyRole;