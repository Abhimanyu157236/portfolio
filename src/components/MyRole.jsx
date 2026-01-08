import React from 'react';
import { Check } from 'lucide-react';
import './hr.css'

const MyRole = () => {
  return (
    <div className='w-[85%] my-4'>
        <hr className='gradient-line2'/>
     <div className='text-2xl md:text-3xl font-bold py-3 border-b border-slate-800'>
      <span className=" font-bold text-[#cbd5e1]">What I Can</span>
      <span className=" font-bold text-[#38bdf8]"> Do</span> 
     </div>
     <div className='flex items-center gap-2 mt-6'>
     <Check color="#22c55e" />
     <p  className="py-3 text-[#cbd5e1] text-sm md:text-lg">Build responsive frontend using React.</p>
     </div>

     <div className='flex items-center gap-2'>
     <Check color="#22c55e" />
     <p  className="py-3 text-[#cbd5e1] text-sm md:text-lg">Convert Figma designs into code.</p>
     </div>

     <div className='flex items-center gap-2'>
     <Check color="#22c55e" />
     <p  className="py-3 text-[#cbd5e1] text-sm md:text-lg">Creates reusable components.</p>
     </div>

     <div className='flex items-center gap-2 '>
     <Check color="#22c55e" />
     <p  className="py-3 text-[#cbd5e1] text-sm md:text-lg">Optimize UI for performance.</p>
     </div>

     <div className='flex items-center gap-2 '>
     <Check color="#22c55e" />
     <p  className="py-3 text-[#cbd5e1] text-sm md:text-lg">Write clean and readable code.</p>
     </div>
     <hr className='gradient-line2 mt-7'/>
     </div>
  );
}

export default MyRole;
