import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button as MuiButton, CircularProgress } from '@material-ui/core';

import useStyles from './styles';

const Button = React.forwardRef((props, ref) => {
  const { children, loading, className, classes, inactive, ...rest } = props;

  const s = useStyles();

  return (
    <MuiButton
      ref={ref}
      className={clsx(className, {
        [s.loading]: loading,
        [classes?.loading]: loading,
        [s.inactive]: inactive,
        [classes?.inactive]: inactive,
      })}
      classes={classes}
      {...rest}
    >
      {loading ? (
        <>
          <CircularProgress size="1em" />
          <div className={s.hidden}>{children}</div>
        </>
      ) : (
        children
      )}
    </MuiButton>
  );
});

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inactive: PropTypes.bool,
  classes: PropTypes.object,
};

export default Button;
