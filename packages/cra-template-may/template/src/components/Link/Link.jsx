import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link as RRLink } from 'react-router-dom';

import { preloadRouteComponent } from 'views/_app/Routes/helpers';

const Link = (props) => {
  const { to, onMouseEnter: onMouseEnterProp } = props;

  const onMouseEnter = useCallback(
    (...all) => {
      preloadRouteComponent(to);
      onMouseEnterProp?.(...all);
    },
    [onMouseEnterProp, to],
  );

  return <RRLink onMouseEnter={onMouseEnter} to={to} {...props} />;
};

Link.propTypes = {
  to: PropTypes.any,
  onMouseEnter: PropTypes.func,
};

export default Link;
