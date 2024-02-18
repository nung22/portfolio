import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import resume from '../assets/Nicholas_Ung_resume.pdf'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NavBar() {
  const matches = useMediaQuery('(min-width:640px)');

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={0} disablePadding>
          <Link 
            to={"/about"}>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={1} disablePadding>
          <Link 
            to={"/work"}>
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary='Work' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton href="mailto:nung@ucla.edu">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton href={resume} target="_blank" rel="noopener noreferrer">
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary='Resume' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {matches ?
        <Stack direction="row" spacing={3}>
          <Link to={"/about"}><Button size="large" style={{fontWeight:"600", fontSize:"1rem"}}>About</Button></Link>
          <Link to={"/work"}><Button size="large" style={{fontWeight:"600", fontSize:"1rem"}}>Work</Button></Link>
          <a href="mailto:nicholasung22@gmail.com"><Button size="large" style={{fontWeight:"600", fontSize:"1rem"}}>Contact</Button></a>
          <Button size="medium" variant="outlined" color="success" href={resume} target="_blank" rel="noopener noreferrer"
          style={{fontWeight:"600", fontSize:"1rem", borderWidth:".13rem", borderRadius: "1.5rem"}}>Resume</Button>
        </Stack> :
        <React.Fragment key={'right'}>
          <IconButton onClick={toggleDrawer('right', true)} color="primary"><MenuIcon/></IconButton>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}