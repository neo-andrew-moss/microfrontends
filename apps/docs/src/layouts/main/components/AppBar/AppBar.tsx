import React from 'react';
import { AppBar as _AppBar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const AppBar = () => {
  return (
    <Box style={{ flexGrow: 1 }}>
      <_AppBar position="static">
        <Toolbar>
          <IconButton color={'primary'} edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography color={'primary'} variant="h6" component="div">
            nextjs-mui-fabric
          </Typography>
          <Button color="primary">Login</Button>
        </Toolbar>
      </_AppBar>
    </Box>
  );
};

export default AppBar;
