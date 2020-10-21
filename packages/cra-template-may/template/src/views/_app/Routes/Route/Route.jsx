import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route as RRRoute } from 'react-router-dom';

import NotFound from 'views/NotFound';

class Route extends Component {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = { hasError: false };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.hasError) return;

    const { location } = this.props;

    if (location.key !== prevProps.location.key) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        hasError: false,
      });
    }
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return <NotFound />;
    }

    return <RRRoute {...this.props} />;
  }
}

Route.propTypes = {
  location: PropTypes.object,
};

export default Route;
