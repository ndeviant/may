import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, Toolbar } from '@material-ui/core';

const Header = (props) => {
  return (
    <AppBar position="static" elevation={0} {...props}>
      <Toolbar disableGutters>
        <Container>Header</Container>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
