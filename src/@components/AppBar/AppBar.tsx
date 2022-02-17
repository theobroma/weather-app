import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useStyles } from './AppBar.styles';
import ThemeMenu from './ThemeMenu/ThemeMenu';

export const SimpleAppBar: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            <Typography className={classes.title} variant="h6" noWrap>
              Weather App
            </Typography>
            <div className={classes.grow} />
            <ThemeMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default SimpleAppBar;
