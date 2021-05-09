import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000;
    --jet: #222;
    --oil: #333;
    --smoke: #eee;
    --gainsboro: #ddd;
    --snow : #F9F9F9;
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
    font-size: 1rem;
    line-height: 1.5rem;
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

  figure {
    margin: 0;
    figcaption {
      font-size: .8rem;
      line-height: 0.5rem;
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

  ul {
    padding: 0 0 0 1.5rem;
  }

  blockquote {
    position: relative;
    font-style: italic;
    margin: 1rem 1.5rem 1rem 0;
    padding: 1rem;
    border-width: 1.2rem;
    border-style: solid;
    border-image: linear-gradient(
      to right,
      var(--light-green),
      var(--snow)
    ) 1 100%;
    border-right: 0;
    background-color: var(--snow);
  }

  blockquote::before {
    position: absolute;
    top: 0;
    left: -1rem;
    content: open-quote;
    font-size: 2rem;
  }
  blockquote::after {
    position: absolute;
    left: -1rem;
    bottom: -.8rem;
    content: close-quote;
    font-size: 2rem;
  }

  code,
  pre {
    background: var(--smoke);
    font-size: 0.8rem;
  }

  :not(pre) > code {
    padding: 2px 4px;
  }

  pre {
    padding: 1rem;
  }
`;
