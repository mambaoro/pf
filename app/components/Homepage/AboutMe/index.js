/**
 *
 * AboutMe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cssDivHeadings, media, bp } from '../../../base';

AOS.init();

const css1Bp500 = css`
  display: flex;
  margin-top: 3rem;
  position: relative;
`;

const css2Bp500 = css`
  width: 50%;
  border-radius: 0;
  min-height: 24rem;
  max-height: 24rem;
  margin-top: 0;
  vertical-align: middle;
`;

const css3Bp500 = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  border-top-left-radius: 5px;
`;

const css4Bp500 = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top-right-radius: 5px;
  padding-bottom: 0;
  p {
    width: 75%;
  }
`;

const css5Bp500 = css`
  position: absolute;
  display: block;
  margin: 0 auto;
  transform: translateX(-50%);
  bottom: -10%;
  background: var(--gradient-secondary);
  :hover {
    background: var(--gradient-secondary-button-active);
  }
  a:link,
  a:visited {
    color: var(--color-text-button);
  }
`;

const cssFontSize = css`
  font-size: var(--font-size-text);
`;

const Section = styled.section`
  margin-bottom: 3rem;
  ${media(css1Bp500, bp.bp500)}
  margin: 3rem auto;
  width: 100%;
  max-width: 96rem;
  box-shadow: var(--shadow);
`;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  margin-top: 0;
  ${media(css2Bp500, bp.bp500)}
  ${media(css3Bp500, bp.bp500)}
  h2 {
    margin-bottom: 0.5rem;
  }
`;

const DivPresentation = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 4rem;
  background-color: var(--bg-text-primary);
  p {
    ${cssFontSize}
    line-height: 2.4rem;
    color: var(--color-text-primary);
    text-align: center;
    justify-content: center;
    width: 32.5rem;
    margin: 0 auto;
  }
  ${media(css2Bp500, bp.bp500)}
  ${media(css4Bp500, bp.bp500)}
`;

const Button = styled.button`
  display: block;
  width: 16rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1.2rem;
  ${cssFontSize}
  background: var(--gradient-primary);
  border-radius: var(--border-radius-button);
  border: none;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.4);
  cursor: pointer;
  :hover {
    background: var(--gradient-primary-button-active);
    /* transform: translateY(-0.6rem);
    box-shadow: 0 0.5rem 0.8rem rgba(0, 0, 0, 0.5); */
  }
  transition: all 0.3s;
  a:link,
  a:visited {
    display: block;
    color: var(--color-heading-primary);
    font-size: var(--font-size-text);
    text-decoration: none;
  }
  ${media(css5Bp500, bp.bp500)}
`;

function AboutMe() {
  return (
    <Section>
      <DivHeadings>
        <h1>Mamadou Baoro</h1>
        <h2>Web Developer</h2>
        <h2>Software Developer</h2>
      </DivHeadings>
      <DivPresentation>
        <p>
          Hi, I’m a web developer focused on creating fully working web
          applications. From user interface to deployment on the cloud, I&apos;m
          able to build any parts of a web app with a robust tech stack.
        </p>
        <Button>
          <Link to="/about-me">More about me</Link>
        </Button>
      </DivPresentation>
    </Section>
  );
}

AboutMe.propTypes = {};

export default AboutMe;
