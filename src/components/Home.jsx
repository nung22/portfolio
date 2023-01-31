import React from 'react';
import { Paper } from '@mui/material';

export default function Home() {
  return (
    <div className='flex justify-center mt-72'>
      <Paper className='flex flex-col gap-8 p-16' style={{borderRadius:".9rem"}} elevation={10}>
        <p className='text-xl font-semibold text-indigo-400'>Hello, my name is</p>
        <p className='text-7xl font-bold text-blue-500'>Nicholas Ung.</p>
        <p className='text-6xl font-bold text-gray-400'>I'm a software engineer &<br/>full stack web developer.</p>
        <p className='text-2xl text-indigo-400'>My passion lies in solving business problems through<br/>
        human-centered design. I specialize in building (and<br/>
        periodically planning) excellent digital experiences.</p>
      </Paper>
    </div>
  );
}