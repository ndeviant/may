import { createMuiTheme, fade } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

const { NODE_ENV } = process.env;

const shadows = [
  'none',
  '0 1px 4px 0 rgba(0, 0, 0, 0.2)',
  '0 1px 10px -5px rgba(0, 0, 0, 0.5)',
  '0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
];

const defaultTheme = createMuiTheme();

const createTheme = (type = 'light') => {
  const palette = {
    type,
    primary: deepPurple,
  };

  const fontFamilyBody = [
    'Open Sans',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',');

  const fontFamilyHeading = [
    'Montserrat',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',');

  const typography = {
    fontFamily: fontFamilyBody,
    fontFamilyHeading,

    h1: {
      fontFamily: fontFamilyHeading,
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: fontFamilyHeading,
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: fontFamilyHeading,
      fontWeight: 700,
      fontSize: '1.875rem',
    },
    h4: {
      fontFamily: fontFamilyHeading,
      fontWeight: 700,
      fontSize: '1.75rem',
    },
    h5: {
      fontFamily: fontFamilyHeading,
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: fontFamilyHeading,
      fontWeight: 'bold',
      fontSize: '1.125rem',
    },
    button: {
      fontFamily: fontFamilyHeading,
      letterSpacing: 0.5,
      fontWeight: 'bold',
    },
  };

  const shape = {
    borderRadius: 16,
  };

  const mixins = {
    toolbar: { minHeight: 56 },
  };

  const theme = createMuiTheme({
    palette,
    typography,
    shape,
    mixins,
    props: {
      MuiContainer: {
        fixed: true,
      },
      MuiSkeleton: {
        animation: 'wave',
      },
      MuiLink: {
        underline: 'always',
      },
      MuiCardActionArea: {
        disableRipple: true,
        focusRipple: true,
      },
      MuiButton: {
        color: 'secondary',
        variant: 'contained',
      },
      MuiCheckbox: {
        color: 'primary',
      },
      MuiRadio: {
        color: 'primary',
      },
      MuiSwitch: {
        color: 'primary',
      },
      MuiTooltip: {
        disableTouchListener: true,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '100rem',
          paddingTop: '0.625rem',
          paddingBottom: '0.5rem',
        },
        contained: {
          backgroundColor: '#f5f5f5',
        },
        text: {
          padding: '0.625rem 1rem 0.5rem',
        },
        outlined: {
          padding: '0.625rem 1rem 0.5rem',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontSize: '0.875rem',
          lineHeight: '1.2',
          backgroundColor: fade(defaultTheme.palette.grey[900], 0.9),
        },
        arrow: {
          color: fade(defaultTheme.palette.grey[900], 0.9),
        },
      },
      MuiTableCell: {
        root: {
          borderBottomColor: '#fff',
        },
      },

      MuiInputLabel: {
        outlined: {
          padding: '4px 8px',
          margin: '-4px',
          borderRadius: '8px',
        },
      },
      MuiFormHelperText: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
  });

  shadows.forEach((shadow, index) => {
    theme.shadows[index] = shadow;
  });

  if (NODE_ENV === 'development') {
    window.theme = theme;
  }

  return theme;
};

export default createTheme;
