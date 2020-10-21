import React from 'react';
// import PropTypes from 'prop-types'

import logo from 'assets/svg/logo.svg';
import Layout from 'layouts/Layout';
import Counter from 'components/Counter/Counter';
import Link from 'components/Link';

import './Home.css';
import { Container, Grid, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Layout>
      <div className="App">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="h4" gutterBottom>
                <Link to="/blog">Blog</Link>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h4" gutterBottom>
                <Link to="/not-found">404</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </div>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;
