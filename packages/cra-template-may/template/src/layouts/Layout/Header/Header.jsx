import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, Toolbar, Link as MuiLink } from '@material-ui/core';
import Link from 'components/Link';

import s from './styled';

const Header = (props) => {
  return (
    <AppBar position="static" elevation={0} {...props}>
      <Container>
        <Toolbar disableGutters>
          <MuiLink color="inherit" to="/" component={Link} variant="h4">
            Home
          </MuiLink>

          <s.NavBox>
            <s.NavLink color="inherit" variant="h6" component={Link} to="/blog">
              Blog
            </s.NavLink>

            <s.NavLink
              color="inherit"
              variant="h6"
              component={Link}
              to="/not-found"
            >
              404
            </s.NavLink>
          </s.NavBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
