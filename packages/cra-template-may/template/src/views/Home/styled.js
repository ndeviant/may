import styled, { keyframes } from 'styled-components';

import Doppler from 'components/Doppler';

const logoAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const s = {
  App: styled.div`
    text-align: center;
  `,

  AppLogo: styled(Doppler)`
    height: 40vmin;
    pointer-events: none;
    animation: ${logoAnimation} 3s ease-in-out infinite;
  `,
};

export default s;
