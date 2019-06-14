import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-heading-primary: #e0e0e0;
    --color-text-primary: #585858;
    --color-text-button: #4E4376;
    --color-gradient-1: #2B5876;
    --color-react: #60DBFB;
    --color-node: #8BC500;
    --color-figma: #A259FF;
    --color-breadcrumb: #bfbfbf;

    --gradient-primary: linear-gradient(90deg, #2B5876 0%, #4E4376 100%);
    --gradient-primary-button-active: linear-gradient(90deg, #2B5890 0%, #4E4398 100%);
    --gradient-secondary: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    --gradient-secondary-button-active: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  

    --bg-text-primary: #fafafa;
    --bg-button: #ADFF2F;

    --border-radius-button: 2.8rem;

    --font-size-text: 1.6rem;
    --font-size-text-list: 2rem;
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
