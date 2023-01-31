import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function NavBar() {
  return (
    <Stack direction="row" spacing={3}>
      <Button size="large" style={{fontWeight:"600", fontSize:"1rem"}} href="#text-buttons">About</Button>
      <Button size="large" style={{fontWeight:"600", fontSize:"1rem"}} href="#text-buttons">Experience</Button>
      <Button size="large" style={{fontWeight:"600", fontSize:"1rem"}} href="#text-buttons">Work</Button>
      <Button size="large" style={{fontWeight:"600", fontSize:"1rem"}} href="#text-buttons">Contact</Button>
      <Button size="medium" variant="outlined" color="success" 
      style={{fontWeight:"600", fontSize:"1rem", borderWidth:".13rem", borderRadius: "1.5rem"}}>Resume</Button>
    </Stack>
  );
}