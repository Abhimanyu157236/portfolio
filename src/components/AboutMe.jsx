import React from 'react';

const AboutMe = () => {
  return (
    <div className='w-[85%] my-4'>
     <div className='text-2xl md:text-3xl font-bold py-3 border-b border-slate-800'>
      <span className=" font-bold text-[#cbd5e1]">About</span>
      <span className=" font-bold text-[#38bdf8]"> Me</span> 
     </div>
      <p className="py-5 px-3 text-[#cbd5e1] text-sm md:text-lg">
            I'm self taught <b>frontend developer</b> who enjoys building responsive and user-friendly web applications.
            <br />
            I focus on writing clean codes, creating smooth UI and learning best practices by building real projects.
            <br />
            Currently improving my skills by building <span className='text-indigo-400 font-bold'> React </span> - based projects.
          </p>
    </div>
  );
}

export default AboutMe;
