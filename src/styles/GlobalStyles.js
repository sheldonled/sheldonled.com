import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000;
    --jet: #222;
    --oil: #333;
    --white: #fff;
    --blue: #135F95;
    --dark-blue: #1b4965;
    --light-green: #afe9e0;
    --dark-green: #2a7f7f;
  }

  ::selection {
    background: var(--jet);
    color: var(--white);
  }

  * {
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
  }

  body {
    margin: 0;
    min-height: 100%;
    overflow-x: hidden;
    width: 100vw;
    padding: 0 0 5rem; //footer size
    position: absolute;
  }

  a {
    color: var(--blue);
    text-decoration: underline;
    &:visited {
      color: var(--blue);
    }
  }

  button:hover,
  button:focus,
  a:hover,
  a:focus {
    color: var(---dark-green);
    cursor: pointer;
    outline: 2px dashed var(--oil);
  }
`;
