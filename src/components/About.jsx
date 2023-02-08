import React from 'react';
import { Paper } from '@mui/material';
import profilePic from "../assets/headShot_BW_noBG.png"

export default function About() {

  return (
    <div className='flex items-center justify-center gap-10 mt-40'>
      <img src={profilePic} width={250} alt="profile pic" className=' bg-blue-500 rounded-full' />
      <p className='text-xl pr-56'>👋 Hi there, I'm Nicholas (you can call me Nick!). 
        <br/><br/>
        I was a student at Coding Dojo where I spent 4 months learning the 
        fundamentals of full stack development in Python, Java, and Javascript (MERN). 
        <br/><br/>
        Through these experiences, I ad the opportunity to work with both small and
        large teams 
        I do my best work with ambitious teams who are proponents of better 
        human experiences, a better society and better futures for all of us.
        <br/><br/>
        I'm currently looking for a new role as a developer. <strong>Hire me?</strong>
      </p>
    </div>
  );
}