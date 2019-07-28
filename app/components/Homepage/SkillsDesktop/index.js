/**
 *
 * SkillsDesktop
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import v4 from 'uuid/v4';
import 'aos/dist/aos.css';
import { cssDivHeadings, cssULList, cssSmallButton } from '../../../base';
import { frontEndSkills, backEndSkills, uiuxSkills } from './skill_ItemList';

AOS.init();

const Div = styled.div`
  position: relative;
  display: flex;
  min-width: 96rem;
  max-width: 96rem;
  margin: 3rem auto;
  margin-bottom: 0;
  article {
    div.heading {
      ${cssDivHeadings};
      margin-top: 0;
    }
    div.button-container {
      ${cssDivHeadings}
      display: flex;
      justify-content: center;
      margin-top: 0;
      border-radius: 0;
      padding: 1.2rem 0;
      a {
        ${cssSmallButton}
        background: var(--gradient-secondary);
        color: var(--color-text-button);
        border-radius: 2.5rem;
        text-decoration: none;
        padding: 1.4rem 3rem;
        font-size: 1.3rem;
        :hover {
          background: var(--gradient-secondary-button-active);
        }
      }
    }
    h1 {
      margin: 1rem 0 2rem 0;
      font-size: 2.2rem !important;
    }
    width: calc(100% / 3);
    :not(:last-child) {
      margin-right: 1.5rem;
    }
    ul {
      ${cssULList};
      display: grid;
      grid-template-rows: min-content;
      grid-auto-rows: min-content;
      justify-content: center;
      min-height: 30rem;
      max-height: 30rem;
      li {
        width: auto;
        align-self: start;
        list-style: none;
        :not(:last-child) {
          margin-bottom: 1rem;
          font-size: 1.9rem;
        }
      }
    }
    .bull-front-end,
    .bull-back-end,
    .bull-ui {
      margin-right: 1rem;
    }
  }
`;

function SkillsDesktop() {
  return (
    <section>
      <Div>
        <article data-aos="flip-right">
          <div className="heading">
            <h1>Front-End</h1>
          </div>
          <ul>
            {frontEndSkills.map(skill => (
              <li key={v4()}>
                <span>
                  <span className="bull-front-end">&bull;</span>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <NavLink exact to="/front-end">
              See details
            </NavLink>
          </div>
        </article>
        <article data-aos="flip-right">
          <div className="heading">
            <h1>Back-End</h1>
          </div>
          <ul>
            {backEndSkills.map(skill => (
              <li key={v4()}>
                <span>
                  <span className="bull-back-end">&bull;</span>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <NavLink exact to="/back-end">
              See details
            </NavLink>
          </div>
        </article>
        <article data-aos="flip-right">
          <div className="heading">
            <h1>UI Design</h1>
          </div>
          <ul>
            {uiuxSkills.map(skill => (
              <li key={v4()}>
                <span>
                  <span className="bull-ui">&bull;</span>
                  {skill}
                </span>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <NavLink exact to="/ui-design">
              See details
            </NavLink>
          </div>
        </article>
      </Div>
    </section>
  );
}

SkillsDesktop.propTypes = {};

export default SkillsDesktop;
