import { Box, Container, IconButton, Tooltip } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NightIcon from '@material-ui/icons/Brightness3';
import DayIcon from '@material-ui/icons/Brightness5';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themeSelector } from '../../@store/ui/selectors';
import { setThemeAC } from '../../@store/ui/slice';
import { ThemeColorsType, THEME_COLORS } from '../../@types';
import { useStyles } from './AppBar.styles';
import ThemeMenu from './ThemeMenu/ThemeMenu';

export const SimpleAppBar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentTheme = useSelector(themeSelector);

  const handleSwitchDarkMode = useCallback(
    (theme: ThemeColorsType) => {
      dispatch(setThemeAC(theme));
    },
    [dispatch],
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            <Typography className={classes.title} variant="h6" noWrap>
              Weather App
            </Typography>
            <div className={classes.grow} />
            {/* TODO: */}
            {/* <ThemeMenu /> */}
            <Box>
              {currentTheme === THEME_COLORS.LIGHT ? (
                <Tooltip title="Switch theme to Dark">
                  <IconButton aria-label="theme">
                    <NightIcon
                      onClick={() => handleSwitchDarkMode(THEME_COLORS.DARK)}
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Switch theme to Light">
                  <IconButton aria-label="theme">
                    <DayIcon
                      onClick={() => handleSwitchDarkMode(THEME_COLORS.LIGHT)}
                    />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default SimpleAppBar;
