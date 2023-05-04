import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      welcome to navbar
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            employee app
          </Typography>
          <Button color="inherit" variant='outlined'>
           <Link to={'/'}>home</Link> </Button>
          
          <Button color="inherit" variant='outlined'> <Link to={'/ademp'}>Add Employee</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
