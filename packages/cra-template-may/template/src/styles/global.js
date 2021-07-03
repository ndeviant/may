import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-family: ${props => props.theme.typography.fontFamily};
    background-color: transparent;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  a {
    text-decoration: none;
  }

  [hidden] {
    display: none !important;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  img, svg {
    user-select: none;
    height: auto;
    max-width: 100%;
  }

  svg {
    display: block;
  }

  video {
    display: block;
  }
`;
