import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import profilePic from "../assets/headshots/headShot_noBG.png"
import profilePicBW from "../assets/headshots/headShot_BW_noBG.png"
import Python_badge from "../assets/icons/Python_badge.png"
import Bootstrap_badge from "../assets/icons/Bootstrap_badge.png"
import CSS_badge from "../assets/icons/CSS_badge.png"
import HTML5_badge from "../assets/icons/HTML5_badge.png"
import Java_badge from "../assets/icons/Java_badge.png"
import Javascript_badge from "../assets/icons/Javascript_badge.png"
import MUI_badge from "../assets/icons/MUI_badge.png"
import Flask_badge from "../assets/icons/Flask_badge.png"
import MySQL_badge from "../assets/icons/MySQL_badge.png"
import NodeJS_badge from "../assets/icons/NodeJS_badge.png"
import MongoDB_badge from "../assets/icons/MongoDB_badge.png"
import SpringBoot_badge from "../assets/icons/SpringBoot_badge.png"
import Tailwind_badge from "../assets/icons/Tailwind_badge.png"
import React_badge from "../assets/icons/React_badge.png"
import Typescript_badge from "../assets/icons/Typescript_badge.png"
import Git_badge from "../assets/icons/Git_badge.png"
import useMediaQuery from '@mui/material/useMediaQuery';

export default function About(props) {
  const matches = useMediaQuery('(min-width:640px)');
  const [picIsHovered, setPicIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, "1000");
  }, [props.colorTheme]);
  return (
    <div className='mb-12'>
      <div className='flex flex-col gap-10 items-center'>
        {!loaded &&
        <div className="flex flex-col justify-between items-center absolute w-11/12 pt-80" 
        style={{height:'100rem', backgroundColor: props.colorTheme === 'dark' ? "#121212" : "#ffffff"}}>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress/>
          </Box>
          <div></div>
        </div>
        }
        {matches ?
          <div className='flex flex-col justify-center items-center mt-16 h-fit text-base gap-5' style={{width:"35rem"}}>
            <div className='flex gap-4'>
              <img src={picIsHovered ? profilePic : profilePicBW}  alt="profile pic"
              onMouseOver={() => setPicIsHovered(true)} onMouseOut={() => setPicIsHovered(false)} className=' bg-blue-500 rounded-xl h-52 w-52 ' />
              <div className='w- flex flex-col gap-4'>
                <p>👋 Hi there, I'm Nick!</p>
                <p>
                  I'm a recent graduate of Coding Dojo, where I honed my skills in
                  programming languages including <strong>HTML</strong>, <strong>CSS</strong>, <strong>Java</strong>, <strong>Python</strong>, and <strong>Javascript</strong>. There I gained
                  experience in full-stack development, and enriched my understanding of the latest web
                  technologies and design trends.
                </p>
              </div>
            </div>
            <p>
              Through this experience, I had the opportunity to work on a vast array of projects with both small and large groups.
              I do my best work with ambitious teams who are proponents of better human experiences,
              a better society and better futures for all of us.
            </p>
          </div> :
          <div className='flex flex-col justify-center gap-10 mt-8' style={{width:"320px"}}>
            <div className='flex justify-center sm:flex-none'><img src={picIsHovered ? profilePic : profilePicBW}  alt="profile pic"
            onMouseOver={() => setPicIsHovered(true)} onMouseOut={() => setPicIsHovered(false)} className=' bg-blue-500 rounded-xl w-40 h-40 md:w-48 md:h-48 lg:h-0' /></div>
            <div className='text-sm flex flex-col gap-4'>
              <p>👋 Hi there, I'm Nick!</p>
              <p>
                I'm a recent graduate of Coding Dojo, where I honed my skills in
                programming languages including <strong>HTML</strong>, <strong>CSS</strong>, <strong>Java</strong>, <strong>Python</strong>, and <strong>Javascript</strong>. There I gained
                experience in full-stack development, and enriched my understanding of the latest web
                technologies and design trends.
              </p>
              <p>
                Through this experience, I had the opportunity to work with both small and large groups.
                I do my best work with ambitious teams who are proponents of better human experiences,
                a better society and better futures for all of us.
              </p>
            </div>
          </div>

        }
        <Paper className='flex flex-col gap-7 p-5 w-fit' style={{borderRadius:".8rem"}} elevation={4}>
          <h2 className='text-center text-xl sm:text-3xl font-bold'>Technical Skills</h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 justify-center w-fit'>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={HTML5_badge} alt="HTML5 icon" />
              <p>HTML5</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={CSS_badge} alt="CSS icon" />
              <p>CSS</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={Javascript_badge} alt="Javascript icon" />
              <p>Javascript</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={Typescript_badge} alt="Typescript icon" />
              <p>Typescript</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={Python_badge} alt="Python icon" />
              <p>Python</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={Java_badge} alt="Java icon" />
              <p>Java</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-14 h-10 sm:w-20 sm:h-14' src={React_badge} alt="React icon" />
              <p>React</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-14 h-11 sm:w-20 sm:h-16' src={Flask_badge} alt="Flask icon" />
              <p>Flask</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-12 h-10 sm:w-16 sm:h-14' src={SpringBoot_badge} alt="SpringBoot icon" />
              <p>Spring Boot</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={NodeJS_badge} alt="NodeJS icon" />
              <p>Node.js</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={MongoDB_badge} alt="MongoDB icon" />
              <p>MongoDB</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-14 h-10 sm:w-20 sm:h-14' src={MySQL_badge} alt="MySQL icon" />
              <p>MySQL</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={MUI_badge} alt="MUI icon" />
              <p>Material UI</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-9 sm:w-16 sm:h-14' src={Bootstrap_badge} alt="Bootstrap icon" />
              <p>Bootstrap</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-8 sm:w-16 sm:h-12' src={Tailwind_badge} alt="Tailwind icon" />
              <p>TailwindCSS</p>
            </Paper>
            <Paper className='flex flex-col p-4 text-xs justify-between gap-2 font-thin items-center sm:text-base hover:-translate-y-2' style={{borderRadius:"1rem"}} elevation={8}>
              <img className='w-10 h-10 sm:w-16 sm:h-16' src={Git_badge} alt="Git icon" />
              <p>Git</p>
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  );
}