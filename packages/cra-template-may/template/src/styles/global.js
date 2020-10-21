import { makeStyles } from '@material-ui/core';

const useGlobalStyles = makeStyles((theme) => ({
  '@global': {
    html: {
      fontSize: '16px',
      fontWeight: 400,
      boxSizing: 'border-box',
    },

    body: {
      fontSize: '1rem',
      fontFamily: theme.typography.fontFamily,
      backgroundColor: 'transparent',
    },

    a: {
      textDecoration: 'none',
    },

    '[hidden]': {
      display: 'none !important',
    },

    strong: {
      fontWeight: 600,
    },

    em: {
      fontStyle: 'italic',
    },

    img: {
      userSelect: 'none',
    },
  },
}));

export { useGlobalStyles };
