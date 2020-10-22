import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import useStyles from './styles';

const Layout = (props) => {
  const { children } = props;

  const s = useStyles();

  return (
    <div className={s.view}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
