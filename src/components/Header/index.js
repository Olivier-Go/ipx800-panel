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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { green, red } from '@material-ui/core/colors';


// == Import styles
import headerStyles from './headerStyles';

// == Composant
const Header = ({ device }) => {
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
            <List className={classes.menuList}>
              <ListItem button key={1}>
                <ListItemText primary="Paramètres" align="center" />
              </ListItem>
            </List>
          </Drawer>
          {device ? (
            <div className={classes.status}>
              <FiberManualRecordIcon className={classes.statusIcon} style={{ color: green[500] }} />
              <Typography align="right" variant="caption">
                { device }
              </Typography>
            </div>
          ) : (
            <div className={classes.status}>
              <FiberManualRecordIcon className={classes.statusIcon} style={{ color: red[500] }} />
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
  device: PropTypes.string,
};

Header.defaultProps = {
  device: '',
};

// == Export
export default Header;
