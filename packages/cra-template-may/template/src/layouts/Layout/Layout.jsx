import React from 'react';
import PropTypes from 'prop-types';

import View from 'layouts/View';

import Header from './Header';
import Footer from './Footer';

import s from './styled';

const Layout = (props) => {
  const { children } = props;

  return (
    <View>
      <Header />
      <s.Main>{children}</s.Main>
      <Footer />
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
