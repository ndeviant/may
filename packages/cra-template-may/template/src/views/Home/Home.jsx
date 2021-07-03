import React from 'react';
// import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

import logo from 'assets/svg/logo.svg';
import Layout from 'layouts/Layout';
import CounterContainer from 'containers/CounterContainer';
import { useCustomThemeContext } from 'hooks/useCustomTheme';

import s from './styled';

const Home = () => {
  const { loadTheme } = useCustomThemeContext();

  return (
    <Layout>
      <s.App>
        <s.AppLogo component="img" src={logo} alt="logo" />
        <CounterContainer />

        <Button
          onClick={() => {
            loadTheme('/api/first-theme.json');
          }}
        >
          Load first theme
        </Button>
        <Button
          onClick={() => {
            loadTheme('/api/second-theme.json');
          }}
        >
          Load second theme
        </Button>
        <Button
          onClick={() => {
            loadTheme(null);
          }}
        >
          Load default theme
        </Button>
      </s.App>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
