import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Doppler from 'components/Doppler';

import useStyles from './styles';

const View = (props) => {
  const { className, children, ...rest } = props;

  const classes = useStyles();

  return (
    <Doppler className={clsx(classes.View, className)} {...rest}>
      {children}
    </Doppler>
  );
};

View.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default View;
