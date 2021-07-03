import styled from 'styled-components';

import Doppler from 'components/Doppler';

export default {
  View: styled(Doppler)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
  `,
};
