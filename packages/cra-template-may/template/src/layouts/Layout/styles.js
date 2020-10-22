import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  view: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
  },

  main: {
    display: 'flex',
    flex: '1 1',
    flexDirection: 'column',
    width: '100%',
  },
}));

export default useStyles;
