import React from 'react';
import './hr.css'
import {CircleDot} from 'lucide-react'

const MySkills = () => {
  return (
    <div className='w-[85%] my-4'>
        <hr className='gradient-line2'/>
     <div className='text-2xl md:text-3xl font-bold py-3 border-b border-slate-800'>
      <span className=" font-bold text-[#cbd5e1]">My</span>
      <span className=" font-bold text-[#38bdf8]"> Skills</span> 
     </div>
     <div className='w-full flex flex-wrap gap-2 py-4'>
      <div className='w-full md:w-[48%] px-4'>
        <span className='flex items-center gap-2'>
            <CircleDot color="#38bdf8" size={15} strokeWidth={1.75} />
            <p className=" font-bold text-[#cbd5e1]">Frontend</p>
             </span>
             <div className='w-full flex flex-wrap gap-7 md:gap-14 border border-blue-900 rounded-lg py-8 px-5 my-5 bg-[#141d33]'>
              <div className='flex gap-1 items-center'> 
              <img src="/skills/icons8-html-5-48.png" alt="html" className='w-6 md:w-8' />
              <p className='text-[#cbd5e1]'>HTML</p>
              </div>
              
              <div className='flex gap-1 items-center'> 
              <img src="/skills/icons8-css-logo-48.png" alt="css" className='w-6 md:w-8' />
              <p className='text-[#cbd5e1]'>CSS</p>
              </div>

               <div className='flex gap-1 items-center'> 
              <img src="/skills/icons8-tailwindcss-48.png" alt="tailwind" className='w-6 md:w-8' />
              <p className='text-[#cbd5e1]'>Tailwind CSS</p>
              </div>

              <div className='flex gap-1 items-center'> 
              <img src="/skills/icons8-javascript-48.png" alt="javascript" className='w-6 md:w-8' />
              <p className='text-[#cbd5e1]'>Javascript</p>
              </div>

              <div className='flex gap-1 items-center'> 
              <img src="/skills/icons8-react-100.png" alt="react" className='w-6 md:w-8' />
              <p className='text-[#cbd5e1]'>React.js</p>
              </div>
             </div>
        
      </div>
     </div>
    </div>
  );
}

export default MySkills;
