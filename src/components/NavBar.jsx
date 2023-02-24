import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import resume from '../assets/Nicholas_Ung_Resume.pdf'

export default function NavBar() {
  return (
    <Stack direction="row" spacing={3}>
      <Link to={"/about"}><Button size="large" style={{fontWeight:"600", fontSize:"1rem"}}>About</Button></Link>
      <Link to={"/work"}><Button size="large" style={{fontWeight:"600", fontSize:"1rem"}}>Work</Button></Link>
      <a href="mailto:nung@ucla.edu"><Button size="large" style={{fontWeight:"600", fontSize:"1rem"}}>Contact</Button></a>
      <Button size="medium" variant="outlined" color="success" href={resume} target="_blank" rel="noopener noreferrer"
      style={{fontWeight:"600", fontSize:"1rem", borderWidth:".13rem", borderRadius: "1.5rem"}}>Resume</Button>
    </Stack>
  );
}