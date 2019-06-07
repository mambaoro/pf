import { css } from 'styled-components';

// const media = (content, breakpoint) => {
//     return css`
//         @media only screen and (max-width: ${breakpoint}) {
//             ${content}
//         }
//     `;
// }

// const bp = {
//     bp1200: '75em', // Example
// };

// export { media, bp };

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
    width: 100vw;
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
