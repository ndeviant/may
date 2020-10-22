import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Container, Toolbar, Link as MuiLink } from '@material-ui/core';
import Link from 'components/Link';

import useStyles from './styles';

const Header = (props) => {
  const s = useStyles();

  return (
    <AppBar position="static" elevation={0} {...props}>
      <Container>
        <Toolbar disableGutters>
          <MuiLink color="inherit" to="/" component={Link} variant="h4">
            Home
          </MuiLink>

          <div className={s.navBox}>
            <MuiLink
              className={s.navLink}
              color="inherit"
              variant="h6"
              component={Link}
              to="/blog"
            >
              Blog
            </MuiLink>

            <MuiLink
              className={s.navLink}
              color="inherit"
              variant="h6"
              component={Link}
              to="/not-found"
            >
              404
            </MuiLink>
          </div>
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
