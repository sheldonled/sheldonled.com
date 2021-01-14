import { createGlobalStyle } from 'styled-components';

const TypographyStyles = createGlobalStyle`
  html {
    font-family: Inconsolata, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--jet);
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
`;

export default TypographyStyles;
