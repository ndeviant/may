import styled from 'styled-components';
import { Link } from '@material-ui/core';

import Doppler from 'components/Doppler';

export default {
  NavBox: styled(Doppler)`
    display: flex;
    margin-left: auto;
  `,

  NavLink: styled(Link)`
    margin-left: 1rem;
  `,
};
