import { css } from 'styled-components';

const media = (content, breakpoint) => css`
  @media only screen and (min-width: ${breakpoint}) {
    ${content}
  }
`;

const bp = {
  bp500: '31.25em', // 500px
  bp600: '37.5em', // 600px
  bp800: '50em', // 800px
  bp1000: '62.5em', // 1000px
};

export { media, bp };

const cssH1Heading = css`
  font-size: 2.588rem;
  line-height: 1;
  margin-bottom: 0.8rem;
`;

const cssH2Heading = css`
  font-size: 1.6rem;
  line-height: 1;
`;

export function cssDivHeadings() {
  return css`
    background: var(--gradient-primary);
    width: 100%;
    min-height: 6.458rem;
    text-align: center;
    vertical-align: middle;
    color: var(--color-heading-primary);
    border-radius: 5px 5px 0px 0px;
    margin: 3rem 0;
    margin-bottom: 0;
    padding: 0.9rem 0 1.2rem 0;
    h1 {
      ${cssH1Heading}
    }
    h2 {
      ${cssH2Heading}
    }
  `;
}

export function cssDivList() {
  return css`
    background: var(--gradient-primary);
    padding: 0 1rem;
    padding-bottom: 2rem;
  `;
}

export function cssULList() {
  return css`
    background-color: var(--bg-text-primary);
    font-size: var(--font-size-text-list);
    color: var(--color-text-primary);
    padding: 1.5rem;
    article {
      :not(:last-child) {
        margin-bottom: 1.5rem;
      }
      li {
        list-style: none;
        vertical-align: middle;
        text-align: center;
        p {
          margin-bottom: 1.5rem;
        }
      }
    }
  `;
}

export function cssDropArrow() {
  return css`
    color: var(--color-text-button);
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
    cursor: pointer;
  `;
}

// button

export function cssSmallButton() {
  return css`
    background: var(--gradient-primary);
    color: var(--color-heading-primary);
    border-radius: var(--border-radius-button);
    font-size: var(--font-size-text);
    padding: 0.5rem 1rem;
    :hover {
      background: var(--bg-button);
      color: var(--color-text-button);
    }
  `;
}

// Global background

export function cssPageContainer() {
  return css`
    background-image: linear-gradient(
      rgba(230, 233, 240, 1),
      rgba(230, 233, 240, 1)
    );
    display: grid;
    padding-top: calc(3rem + 4.8rem);
  `;
}
