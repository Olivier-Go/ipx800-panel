// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
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
const Header = ({
  status,
  iconStatus,
  notificationsStatus,
  notificationsStatusLoader,
  fetchSynoNotificationFilters,
}) => {
  const classes = headerStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchSynoNotificationFilters();
  }, ['AppBar']);

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
          <div className={classes.status}>
            {iconStatus ? (
              <>
                {Object.keys(status).length ? (
                  <>
                    <FiberManualRecordIcon className={classes.statusIconOnline} />
                    <Typography align="right" variant="caption">
                      { status.config_hostname }
                    </Typography>
                  </>
                ) : (
                  <>
                    <FiberManualRecordIcon className={classes.statusIconOffline} />
                    <Typography align="right" variant="caption">
                      hors ligne
                    </Typography>
                  </>
                )}
              </>
            ) : (
              <CircularProgress size={20} className={classes.statusIcon} />
            )}
            {notificationsStatusLoader ? (
              <CircularProgress size={20} className={classes.statusNotificationIcon} />
            ) : (
              <>
                {notificationsStatus ? (
                  <NotificationsActiveIcon className={classes.statusNotificationOn} />
                ) : (
                  <NotificationsOffIcon className={classes.statusNotificationOff} />
                )}
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  status: PropTypes.object.isRequired,
  iconStatus: PropTypes.bool.isRequired,
  notificationsStatus: PropTypes.bool.isRequired,
  notificationsStatusLoader: PropTypes.bool.isRequired,
  fetchSynoNotificationFilters: PropTypes.func.isRequired,
};

// == Export
export default Header;
