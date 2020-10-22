import React, { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';

import { preloadRouteComponent } from 'views/_app/Routes/helpers';

const Link = forwardRef(function Link(props, ref) {
  const { to, onMouseEnter: onMouseEnterProp, ...rest } = props;

  const onMouseEnter = useCallback(
    (...all) => {
      preloadRouteComponent(to);
      onMouseEnterProp?.(...all);
    },
    [onMouseEnterProp, to],
  );

  return <RRLink ref={ref} onMouseEnter={onMouseEnter} to={to} {...rest} />;
});

Link.propTypes = {
  to: PropTypes.any,
  onMouseEnter: PropTypes.func,
};

export default Link;
