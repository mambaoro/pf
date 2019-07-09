/**
 *
 * Content
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cssDivHeadings, cssDivList, media, bp } from '../../../base';

AOS.init();

const css1Bp600 = css`
  width: 75%;
`;

const Main = styled.main`
  max-width: 96rem;
  margin: 0 auto;
  box-shadow: var(--shadow);
  margin-top: 3rem;
`;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  margin-top: 0;
  padding-top: 7.5rem;
  padding-bottom: 0;
  min-height: 20rem;
`;

const DivText = styled.div`
  ${cssDivList}
  background: var(--bg-text-primary);
  padding-bottom: 2.5rem;
  p {
    padding-top: 2.5rem;
    padding-bottom: 0;
    font-size: var(--font-size-text);
    color: var(--color-text-primary);
    text-align: left;
    width: 90%;
    max-width: 42.5rem;
    margin: 0 auto;
    ${media(css1Bp600, bp.bp600)}
  }
`;

function Content() {
  return (
    <Main data-aos="fade-right">
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
          creating http servers with Express-based REST API, user authentication
          with secure authentication library Passport, upload with Amazon S3,
          email verification with view engines and so much more. For months I
          fine-tuned a personal boilerplate to quickly boostrap projects and be
          up and running.
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

Content.propTypes = {};

export default Content;
