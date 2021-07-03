import { Button, CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export default {
  Button: styled(Button)`
    position: relative;

    ${({ $inactive }) => {
      if (!$inactive) return '';

      return `
        pointer-events: none;
      `;
    }}
  `,

  CircularProgress: styled(CircularProgress)`
    position: absolute;
    font-size: 1.5em;
    left: calc(50% - 0.5em);
    top: calc(50% - 0.5em);
    color: inherit;
  `,

  Hidden: styled.div`
    visibility: hidden;
  `,
};
