import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button: {
    position: 'relative',
  },

  inactive: {
    pointerEvents: 'none',
  },

  hidden: {
    visibility: 'hidden',
  },

  progress: {
    position: 'absolute',
    fontSize: '1.5em',
    left: 'calc(50% - 0.5em)',
    top: 'calc(50% - 0.5em)',
    color: 'inherit',
  },
}));

export default useStyles;
