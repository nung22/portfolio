// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { IconButton } from '@mui/material';
import logo from './assets/logo.png'
import ThemeSwitch from './components/ThemeSwitch';
import NavBar from './components/NavBar'
import Home from './components/Home';

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
        <Home/>
      </div>
    </ThemeProvider>
  );
}

export default App;
