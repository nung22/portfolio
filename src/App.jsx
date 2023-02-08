// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import logo from './assets/logo.png'
import Favicon from "react-favicon";
import ThemeSwitch from './components/ThemeSwitch';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';

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
    <ThemeProvider theme={theme}>
      <Favicon url={logo}></Favicon>
      <CssBaseline />
      <div className='p-5 px-12 flex-col'>
        <div className='flex justify-between items-center'>
            <IconButton aria-label="logo" onClick={() => navigate('/')}>
              <img width={70} src={logo} alt="logo" />
            </IconButton>
          <div className='flex items-center gap-5'>
            <NavBar />
            <ThemeSwitch onClick={onToggle}/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route element={<Home/>} path="/home" />
          <Route element={<About/>} path="/about" />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
