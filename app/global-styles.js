import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-heading-primary: #e0e0e0;

    --gradient-primary: linear-gradient(90deg, #2B5876 0%, #4E4376 100%);
  }
  
  *,
  *::after,
  *::before,
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-weight: inherit;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    font-weight: 400;
  }

  body.fontLoaded {
    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyle;
