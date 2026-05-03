import React from 'react';
import './hr.css'
import { CircleDot } from 'lucide-react'
import Frontend from './Frontend';
import Backend from './Backend';
import { motion } from 'motion/react'

const MySkills = () => {
  return (
    <div className='w-[90%] md:w-[80%] my-4'>
      <hr className='gradient-line2' />

      {/* Heading — fade in from left */}
      <motion.div
        className='text-2xl md:text-3xl font-bold py-3 border-b border-slate-800'
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="font-bold text-[#cbd5e1]">My</span>
        <span className="font-bold text-[#38bdf8]"> Skills</span>
      </motion.div>

      <div className='w-full flex flex-wrap gap-2 py-4'>

        {/* Frontend card — fade in from left */}
        <motion.div
          className='w-full md:w-[48%] px-4'
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <span className='flex items-center gap-2'>
            <CircleDot color="#38bdf8" size={15} strokeWidth={1.75} />
            <p className="font-bold text-[#cbd5e1]">Frontend</p>
          </span>
          <Frontend />
        </motion.div>

        {/* Backend card — fade in from right */}
        <motion.div
          className='w-full md:w-[49%] px-4'
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <span className='flex items-center gap-2'>
            <CircleDot color="#38bdf8" size={15} strokeWidth={1.75} />
            <p className="font-bold text-[#cbd5e1]">Backend</p>
          </span>
          <Backend />
        </motion.div>

      </div>
    </div>
  );
}

export default MySkills;