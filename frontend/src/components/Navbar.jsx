import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'purple'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management System
          </Typography>
          <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/main/employeeform'}>Add Employee</Link></Button>
          <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/main/employeelist'}>Employee List</Link></Button>
          <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/'}>Logout</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
