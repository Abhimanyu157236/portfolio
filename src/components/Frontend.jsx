import React from 'react';

const Frontend = () => {
    const skills = ["HTML", "CSS", "Tailwind CSS", "Javascript", "React.js", "Chartjs", "Framer motion"];  
  return (
     <div className='w-full flex justify-center flex-wrap gap-7 md:gap-14 border border-blue-900 rounded-lg py-8 md:px-5 px-1 my-5 bg-gradient-to-br from-sky-400/10 via-sky-700/40 to-sky-200/40 shadow-inner shadow-[_#6eee]'>
        {skills.map((skill, index) => (
          <div key={index} className=' flex gap-1 items-center'> 
              <img src={`/skills/${skill}.png`} alt={skill} className='w-6 md:w-8' />
                <p className='text-[#cbd5e1] text-xs md:text-sm'>{skill}</p>   
                </div>
        ))}
        </div>
  );
}

export default Frontend;
