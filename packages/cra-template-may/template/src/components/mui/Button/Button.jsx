import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import s from './styled';

const Button = React.forwardRef((props, ref) => {
  const { children, loading, className, inactive, ...rest } = props;

  return (
    <s.Button
      ref={ref}
      className={clsx(className, {
        'Button-loading': loading,
        'Button-inactive': inactive,
      })}
      $inactive={inactive || loading}
      {...rest}
    >
      {loading ? (
        <>
          <s.CircularProgress size="1em" />
          <s.Hidden>{children}</s.Hidden>
        </>
      ) : (
        children
      )}
    </s.Button>
  );
});

Button.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  inactive: PropTypes.bool,
};

export default Button;
