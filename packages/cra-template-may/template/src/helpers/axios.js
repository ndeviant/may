/* eslint-disable no-param-reassign */
import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

/**
 * Sets default setting for the axios.
 */
const configureAxios = () => {
  axios.defaults.baseURL = REACT_APP_API_URI;

  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Needed for CORS requests, only for our trusted domain
  axios.interceptors.request.use((config) => {
    if (config.url.includes(config.baseURL)) {
      config.withCredentials = true;
      config.crossdomain = true;
    }

    return config;
  });
};

export { configureAxios };
