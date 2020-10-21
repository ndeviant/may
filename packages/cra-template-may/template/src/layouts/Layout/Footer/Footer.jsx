import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, Toolbar } from '@material-ui/core';

const Footer = (props) => {
  return (
    <AppBar position="static" elevation={0} {...props}>
      <Toolbar disableGutters>
        <Container>Footer</Container>
      </Toolbar>
    </AppBar>
  );
};

Footer.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Footer;
