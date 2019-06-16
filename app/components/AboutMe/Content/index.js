/**
 *
 * Content
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { cssDivHeadings, cssDivList, media, bp } from '../../../base';

function Content() {
  return (
    <Main>
      <DivHeadings>
        <h1>Mamadou Baoro</h1>
        <h2>About me</h2>
      </DivHeadings>
      <DivText>
        <p>
          I’m a web developer focused on creating web apps from the tiniest bit
          of CSS to deployment on the cloud. On the front-end part I develop
          user interfaces with routing and state management, with technologies
          like React and JavaScript. I’m also a skilled CSS developer, styling
          pages without Bootstrap or any library for a fine-grained design that
          stands out. <br />
          <br />
          On the back-end part I make good use of JavaScript with NodeJS,
          building servers with GraphQL and Apollo as well as REST API, user
          authentication with the secure and robust authorization platform
          Auth0, real-time apps with WebSocket and so much more. Also, for
          months I fine-tuned a personal boilerplate to quickly boostrap
          projects and be up and running.
          <br />
          <br />
          Besides languages and tooling, Web development is about thinking,
          therefore i’m not opiniated and always willing to use new concept and
          technologies. So, let&apos;s think our next projects.
        </p>
      </DivText>
    </Main>
  );
}

const css1Bp600 = css`
  width: 75%;
`;

const Main = styled.main`
  max-width: 96rem;
  margin: 0 auto;
`;

const DivHeadings = styled.div`
  ${cssDivHeadings}
`;

const DivText = styled.div`
  ${cssDivList}
  background: var(--bg-text-primary);
  p {
    padding-top: 1.5rem;
    font-size: var(--font-size-text);
    color: var(--color-text-primary);
    text-align: center;
    width: 90%;
    max-width: 42.5rem;
    margin: 0 auto;
    ${media(css1Bp600, bp.bp600)}
  }
`;

Content.propTypes = {};

export default Content;
