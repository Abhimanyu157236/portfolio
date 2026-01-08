import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyRole from './components/MyRole';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='w-full h-max bg-[#101729] py-10 md:py-16 flex flex-col items-center'>
     <HeroSection />
     <AboutMe />
     <MySkills />
     <Projects />
     <MyRole />
     <ContactMe />
    </div>
  );
}

export default App;
