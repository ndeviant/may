/* eslint-disable react/prop-types */
import React from 'react';

const WrapIf = (props) => {
  const { if: ifProp, Wrapper, WrapperProps, children, ...rest } = props;

  if (!ifProp || !Wrapper) return children;

  return (
    <Wrapper {...rest} {...WrapperProps}>
      {children}
    </Wrapper>
  );
};

export default WrapIf;
