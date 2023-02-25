// import logo from './logo.svg';
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React, { useState } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import logo from './assets/logos/logo.png'
import ThemeSwitch from './components/ThemeSwitch';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';

function App() {
  const [colorTheme, setColorTheme] = useState('dark');
  const navigate = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      mode: colorTheme,
    },
  });

  const onToggle = () => {
    colorTheme === 'dark'
      ? setColorTheme('light')
      : setColorTheme('dark');
  }

  return (
    <div className="flex flex-col h-screen w-full">
      <ThemeProvider theme={theme} className="w-full">
        <CssBaseline />
        <div className='flex justify-between items-center px-2 py-2 sm:py-2 sm:px-8 opacity-80 scroll-invisible'>
            <IconButton aria-label="logo" onClick={() => navigate('/')}>
              <img className='w-8 sm:w-14' src={logo} alt="logo" />
            </IconButton>
          <div className='flex items-center gap-5'>
            <NavBar/>
            <ThemeSwitch onClick={onToggle}/>
          </div>
        </div>
        <div className='p-5 flex flex-col'>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route element={<Home/>} path="/home" />
            <Route element={<About/>} path="/about" />
            <Route element={<Work/>} path="/work" />
          </Routes>
        </div>
        <div className='fixed bottom-20 left-0 flex items-center rotate-90 gap-5' style={{marginLeft:"-2.8rem"}}>
          <a href="https://www.linkedin.com/in/nicholas-ung-285495123/" className='hover:text-blue-500'
          style={{ paddingBottom:".2rem"}} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className='-rotate-90'/>
          </a>
          <a href="https://github.com/nung22" className='hover:text-blue-500'
          style={{ paddingBottom:".2rem"}} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className='-rotate-90'/>
          </a>
          <div className={`h-px ${colorTheme === 'dark' ? 'bg-white' : 'bg-black'}`} style={{width:"8rem"}}></div>
        </div>
        <div className='fixed bottom-28 right-0 flex items-center rotate-90 gap-7' style={{marginRight:"-5rem"}}>
          <a href="mailto:nung@ucla.edu" className='hover:text-blue-500 font-semibold text-lg' style={{ paddingBottom:".2rem"}}>nung@ucla.edu</a>
          <div className={`h-px ${colorTheme === 'dark' ? 'bg-white' : 'bg-black'}`} style={{width:"7rem"}}></div>
        </div>
      </ThemeProvider>
      <div className='mt-auto w-full flex justify-center pb-8'>
        <a href="https://github.com/nung22/portfolio" target="_blank" rel="noopener noreferrer"
          className='text-sm font-semibold opacity-60 text-center hover:text-blue-500 hover:opacity-100'>Designed & Built by Nicholas Ung</a>
      </div>
    </div>
  );
}

export default App;