import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import FleaFlickr from '../assets/projects/FleaFlickr.png'
import ChowCounter from '../assets/projects/ChowCounter.png'

export default function Work(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, "1000");
  }, []);
  
  return (
    <div className='flex justify-center mt-8'>
    {!loaded &&
      <div className="flex justify-center items-center absolute w-full h-full z-10" style={{backgroundColor: props.colorTheme === 'dark' ? "#121212" : "#ffffff"}}>
        <Box sx={{ display: 'flex' }} className='pb-96'>
          <CircularProgress />
        </Box>
      </div>
    }
      <div className='flex flex-col gap-3 sm:gap-8 sm:translate-x-2' style={{width:"42rem"}}>
        <h2 className="font-semibold text-5xl mb-5">Work</h2>
        <h3 className='text-2xl'>A selection of recent and past projects</h3>
        <a href={"https://github.com/nung22/fleaflickr"} className="flex gap-5 text-xl"
        target="_blank"  rel="noopener noreferrer">
          <img className="rounded-lg hover:animate-pulse" src={FleaFlickr} width={400} alt="FleaFlickr ScreenShot"/>
          <div className='flex flex-col justify-between'>
            <h4 className='text-2xl font-semibold'>FleaFlickr</h4>
            <p>An issue tracker and project management software</p>
            <div className='flex gap-2'>
              <p className='font-semibold'>Read more</p>
              <EastIcon style={{marginTop:"5.5px"}}/>
            </div>
          </div>
        </a>
        <a href={"https://github.com/nung22/chow-counter"} className="flex gap-5 text-xl"
        target="_blank"  rel="noopener noreferrer">
          <img className="rounded-lg hover:animate-pulse" src={ChowCounter} width={400} alt="Chow Counter ScreenShot"/>
          <div className='flex flex-col justify-between'>
            <h4 className='text-2xl font-semibold'>Chow Counter</h4>
            <p>A calorie-tracking app with built-in tools to discover new restaurants and recipes</p>
            <div className='flex gap-2'>
              <p className='font-semibold'>Read more</p>
              <EastIcon style={{marginTop:"5.5px"}}/>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}