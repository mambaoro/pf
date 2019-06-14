/**
 *
 * Contact
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { cssDivHeadings, cssDivList, media, bp } from '../../base';
import SvgGithub from '../GithubIcon/Loadable';

function Contact() {
  return (
    <Section>
      <DivHeadings>
        <h1>Contact</h1>
      </DivHeadings>
      <DivContent>
        <a href="mailto: mam.baoro@outlook.fr" className="email">
          mam.baoro@outlook.fr
        </a>
        <a
          href="https://drive.google.com/open?id=1fg6kpB56vvgRcAjYCjjgLCghJyQQszfW"
          className="resume"
          target="_blank"
        >
          Resume
        </a>
        <p>&copy; Site created by Mamadou Baoro - 2019</p>
        <a
          href="https://github.com/mambaoro"
          className="github"
          target="_blank"
        >
          <SvgGithub fill="#fafafa" />
        </a>
      </DivContent>
    </Section>
  );
}

const css1Bp500 = css`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  grid-row-gap: 2rem;
  a,
  p {
    margin-bottom: 0;
  }
`;

const css2Bp500 = css``;

const Section = styled.section`
  margin-bottom: 0;
`;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  padding-top: 1.8rem;
`;

const DivContent = styled.div`
  ${cssDivList}
  display: flex;
  flex-direction: column;
  color: var(--bg-text-primary);
  padding-bottom: 1.8rem;
  a {
    display: block;
    font-size: 2rem;
    text-align: center;
    line-height: 1;
    display: inline-block;
    color: var(--bg-text-primary);
    margin: 0 auto;
    margin-bottom: 2rem;
    :hover {
      color: var(--bg-button);
    }
  }
  a.email {
    ${media(css2Bp500, bp.bp500)}
  }
  a.github {
    border: none;
    margin-bottom: 0;
  }
  p {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  svg {
    display: block;
    margin: 0 auto;
  }
  ${media(css1Bp500, bp.bp500)}
`;

Contact.propTypes = {};

export default Contact;
