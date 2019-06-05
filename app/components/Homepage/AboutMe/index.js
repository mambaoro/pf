/**
 *
 * AboutMe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { cssDivHeadings } from '../../../base';

function AboutMe() {
  return (
    <Section>
      <DivHeadings>
        <h1>Mamadou Baoro</h1>
        <h2>Web Developer</h2>
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

const cssFontSize = css`
  font-size: var(--font-size-text);
`;

const Section = styled.section``;

const DivHeadings = styled.div`
  ${cssDivHeadings}
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
    transform: translateY(-0.6rem);
    box-shadow: 0 0.5rem 0.8rem rgba(0, 0, 0, 0.5);
  }
  transition: all 0.3s;
  a:link,
  a:visited {
    display: block;
    color: var(--color-heading-primary);
    font-size: var(--font-size-text);
    text-decoration: none;
  }
`;

AboutMe.propTypes = {};

export default AboutMe;
