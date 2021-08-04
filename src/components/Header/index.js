// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

// == Import styles
import headerStyles from './headerStyles';

// == Composant
const Header = ({ status }) => {
  const classes = headerStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuBurger} color="inherit" aria-label="menu" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={handleClick}>
            <div className={classes.menuClose}>
              <IconButton onClick={handleClick}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className={classes.menuList}>
              <Typography align="center" variant="h6" gutterBottom>
                Informations sur l'appareil
              </Typography>
              {Object.keys(status).length ? (
                <div className={classes.menuListItems}>
                  <CheckCircleIcon fontSize="large" className={classes.menuListIconOn} />
                  <List>
                    <ListItemText key={1} primary={`Version : ${status.version}`} align="left" />
                    <ListItemText key={2} primary={`MAC : ${status.config_mac}`} align="left" />
                    <ListItemText key={3} primary={`Port : ${status.http_port}`} align="left" />
                    <ListItemText key={4} primary={`Last Update : ${status.day} ${status.time0}`} align="left" />
                  </List>
                </div>
              ) : (
                <div className={classes.menuListItems}>
                  <ErrorIcon fontSize="large" className={classes.menuListIconOff} />
                  <Typography variant="subtitle1" gutterBottom>
                    Echec de la connexion
                  </Typography>
                </div>
              )}
            </div>
          </Drawer>
          {Object.keys(status).length ? (
            <div className={classes.status}>
              <FiberManualRecordIcon className={classes.statusIconOnline} />
              <Typography align="right" variant="caption">
                { status.config_hostname } connecté
              </Typography>
            </div>
          ) : (
            <div className={classes.status}>
              <FiberManualRecordIcon className={classes.statusIconOffline} />
              <Typography align="right" variant="caption">
                hors ligne
              </Typography>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  status: PropTypes.object.isRequired,
};

// == Export
export default Header;
