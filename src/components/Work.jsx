import React from 'react';
import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import FleaFlickr from '../assets/projects/FleaFlickr.png'
import ChowCounter from '../assets/projects/ChowCounter.png'

export default function Home() {

  return (
    <div>
      <div className='flex justify-center mt-8'>
        <div className='flex flex-col gap-3 sm:gap-8 sm:translate-x-2' style={{width:"42rem"}}>
          <h2 className="font-semibold text-5xl mb-5">Work</h2>
          <h3 className='text-2xl'>A selection of recent and past projects</h3>
          <Link to={"/work"} className="flex gap-5 text-xl">
            <img className="rounded-lg hover:animate-pulse" src={FleaFlickr} width={400} alt="FleaFlickr ScreenShot"/>
            <div className='flex flex-col justify-between'>
              <h4 className='text-2xl font-semibold'>FleaFlickr</h4>
              <p>An issue tracker and project management software</p>
              <div className='flex gap-2'>
                <p className='font-semibold'>Read more</p>
                <EastIcon style={{marginTop:"5.5px"}}/>
              </div>
            </div>
          </Link>
          <Link to={"/work"} className="flex gap-5 text-xl">
            <img className="rounded-lg hover:animate-pulse" src={ChowCounter} width={400} alt="Chow Counter ScreenShot"/>
            <div className='flex flex-col justify-between'>
              <h4 className='text-2xl font-semibold'>Chow Counter</h4>
              <p>A calorie-tracking app with built-in tools to discover new restaurant and recipes</p>
              <div className='flex gap-2'>
                <p className='font-semibold'>Read more</p>
                <EastIcon style={{marginTop:"5.5px"}}/>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}