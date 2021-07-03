import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider as MuiThemeProvider,
  useTheme,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = (props) => {
  const { theme, children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <PrivateInnerThemeProvider>{children}</PrivateInnerThemeProvider>
    </MuiThemeProvider>
  );
};

const PrivateInnerThemeProvider = ({ children }) => {
  const theme = useTheme();

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
};

PrivateInnerThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
