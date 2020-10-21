import React from 'react';
import PropTypes from 'prop-types';

import View from 'layouts/View';

import Header from './Header';
import Footer from './Footer';
import useStyles from './styles';

const Layout = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <View>
      <Header />
      <main className={classes.Main}>{children}</main>
      <Footer />
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  MainDrawer: PropTypes.node,
};

export default Layout;
