import React from 'react';
// import PropTypes from 'prop-types'

import logo from 'assets/svg/logo.svg';
import Layout from 'layouts/Layout';
import CounterContainer from 'containers/CounterContainer';

import './Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterContainer />
      </div>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
