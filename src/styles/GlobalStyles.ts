import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--primary-color)
  }
  html, body, main, #root {
    max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    position: relative;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    background: var(--primary-bg);
  }
  :root {
    --primary-bg: #FFF;
    --primary-color: #000;
  }
`;
