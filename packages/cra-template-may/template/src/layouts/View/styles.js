import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  View: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
}));

export default useStyles;
