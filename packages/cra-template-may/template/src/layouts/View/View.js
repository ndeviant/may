import React from 'react';
import PropTypes from 'prop-types';

import s from './styled';

const View = (props) => {
  const { children, ...rest } = props;

  return <s.View {...rest}>{children}</s.View>;
};

View.propTypes = {
  children: PropTypes.node.isRequired,
};

export default View;
