/**
 *
 * Content
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import v4 from 'uuid/v4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cssDivList, cssDivHeadings, media, bp } from '../../base';

AOS.init();

function Content(props) {
  return (
    <ListSkills data-aos="fade-right">
      {props.skillList.map(skill => (
        <ListItemSkill key={v4()}>
          <DivHeadings className="headings">
            <h1>{skill.heading}</h1>
            <h2>{skill.subheading}</h2>
          </DivHeadings>
          <DivDescription className="description">
            <p>{skill.description}</p>
          </DivDescription>
        </ListItemSkill>
      ))}
    </ListSkills>
  );
}

const css1Bp600 = css`
  display: grid;
  grid-template-columns: min-content;
  justify-content: center;
  li {
    min-height: 31.1rem;
    max-height: 31.1rem;
    max-width: 37.5rem;
    div {
      max-width: 37.5rem;
    }
    div.description {
      padding-top: 1.5rem;
      p {
        max-height: 20rem;
        overflow-y: auto;
      }
      div.headings {
        padding-top: 1.5rem;
        min-height: 8.8rem;
        max-height: 8.8rem;
      }
    }
  }
`;

const css2Bp600 = css`
  :nth-child(-n + 2) {
    margin-top: 3rem;
  }
`;

const css1Bp800 = css`
  grid-template-columns: repeat(2, 1fr);
`;

const ListSkills = styled.ul`
  ${media(css1Bp600, bp.bp600)}
  ${media(css1Bp800, bp.bp800)}
`;

const ListItemSkill = styled.li`
  :first-child {
    margin-top: 3rem;
  }
  margin: 0 auto;
  list-style: none;
  ${media(css2Bp600, bp.bp600)}
`;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  margin-top: 0 !important;
  h2 {
    width: 60%;
    margin: 0 auto;
    line-height: 1.2;
  }
`;

const DivDescription = styled.div`
  ${cssDivList}
  background: var(--bg-text-primary);
  padding: 1.5rem;
  font-size: var(--font-size-text);
  text-align: center;
  min-height: 20rem;
  color: var(--color-text-primary);
`;

Content.propTypes = {
  skillList: PropTypes.array,
};

export default Content;
