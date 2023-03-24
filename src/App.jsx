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
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const navSwitch = useMediaQuery('(min-width:640px)');
  const matches = useMediaQuery('(min-width:860px)');
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
    <ThemeProvider theme={theme}>
      <div className="flex flex-col h-screen">
        <CssBaseline />
        <div className='flex justify-between items-center p-4 sm:p-8 opacity-80 scroll-invisible'>
            <IconButton aria-label="logo" onClick={() => navigate('/')}>
              <img className='w-12 h-12 sm:w-14 sm:h-14' src={logo} alt="logo" />
            </IconButton>
          <div className='flex items-center gap-5'>
            {!navSwitch && <ThemeSwitch onClick={onToggle}/>}
            <NavBar/>
            {navSwitch && <ThemeSwitch onClick={onToggle}/>}
          </div>
        </div>
        <div className='p-5 flex flex-col'>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route element={<Home colorTheme={colorTheme}/>} path="/home" />
            <Route element={<About colorTheme={colorTheme}/>} path="/about" />
            <Route element={<Work colorTheme={colorTheme}/>} path="/work" />
          </Routes>
        </div>
        {matches &&
          <div className='z-50'>
            <div className='fixed opacity-70 bottom-20 left-0 flex items-center rotate-90 gap-5' style={{marginLeft:"-2.8rem"}}>
              <a href="https://www.linkedin.com/in/nicholas-ung-285495123/" className='hover:text-blue-500'
              style={{ paddingBottom:".2rem"}} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className='-rotate-90'/>
              </a>
              <a href="https://github.com/nung22" className='hover:text-blue-500'
              style={{ paddingBottom:".2rem"}} target="_blank" rel="noopener noreferrer">
                <GitHubIcon className='-rotate-90'/>
              </a>
              <div className={`bg-opacity-70 h-px ${colorTheme === 'dark' ? 'bg-white' : 'bg-black'}`} style={{width:"8rem"}}></div>
            </div>
            <div className='fixed opacity-70 bottom-28 right-0 flex items-center rotate-90 gap-7' style={{marginRight:"-5rem"}}>
              <a href="mailto:nicholasung22@gmail.com" className='hover:text-blue-500 font-semibold text-lg' style={{ paddingBottom:".2rem"}}>nicholasung22@gmail.com</a>
              <div className={`bg-opacity-70 h-px ${colorTheme === 'dark' ? 'bg-white' : 'bg-black'}`} style={{width:"7rem"}}></div>
            </div>
          </div>
        }
        <div className='mt-auto w-full flex justify-center pb-8 z-50 flex-col'>
          {!matches &&
          <div  className='z-50 w-full flex justify-center pb-4 opacity-70 gap-4'>
            <a href="https://www.linkedin.com/in/nicholas-ung-285495123/" className='hover:text-blue-500'
            target="_blank" rel="noopener noreferrer">
            <LinkedInIcon/>
            </a>
            <a href="https://github.com/nung22" className='hover:text-blue-500'
            target="_blank" rel="noopener noreferrer">
              <GitHubIcon/>
            </a>
          </div>
          }
          <a href="https://github.com/nung22/portfolio" target="_blank" rel="noopener noreferrer"
            className='text-base font-semibold opacity-70 text-center hover:text-blue-500 hover:opacity-100'>Designed & Built by Nicholas Ung</a>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
