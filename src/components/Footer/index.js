// == Import npm
import React from 'react';

// == Import components
import {
  Container, Typography,
} from '@material-ui/core';

// == Import styles
import footerStyles from './footerStyles';

// == Composant
const Footer = () => {
  const classes = footerStyles();
  return (
    <Container maxWidth={false} className={classes.footerWrapper}>
      <Typography variant="caption" color="secondary">
        {'© IPX800 Panel '}
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

// == Export
export default Footer;
