import React, { forwardRef, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

const Doppler = memo(
  forwardRef(function Doppler(props, ref) {
    const {
      className,
      component,
      collisionFix,
      children,
      onMount,
      onUnmount,
      ...rest
    } = props;

    useEffect(() => {
      if (onMount) {
        onMount();
      }

      return onUnmount;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    const Component = collisionFix ?? component ?? 'div';

    return (
      <Component
        className={className}
        component={collisionFix ? component : undefined}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }),
);

Doppler.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  collisionFix: PropTypes.any,
  children: PropTypes.node,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
};

export default Doppler;
