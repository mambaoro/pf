/**
 *
 * Projects
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import AOS from 'aos';
import v4 from 'uuid/v4';
import 'aos/dist/aos.css';
import {
  cssDivHeadings,
  cssDivList,
  cssULList,
  cssSmallButton,
} from '../../../base';
import projectList from './projectList';

AOS.init();

function Projects() {
  return (
    <Section>
      <DivHeadings>
        <h1>Projects</h1>
      </DivHeadings>
      <DivListProjects>
        <ULList>
          {projectList.map(project => (
            <article key={v4()} data-aos="fade-left">
              <li>
                <p>{project.label}</p>
                <DivLinks>
                  <a href={project.linkGitHub} target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                      fill="#2B5876"
                    >
                      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                    </svg>
                  </a>
                  <p>
                    <a
                      href={project.linkHeroku}
                      className="heroku"
                      target="_blank"
                    >
                      Live code
                    </a>
                  </p>
                </DivLinks>
              </li>
            </article>
          ))}
        </ULList>
      </DivListProjects>
    </Section>
  );
}

const Section = styled.section``;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  margin: auto 0;
  padding: 1.2rem 0 1.2rem 0;
  h1 {
    margin: 0.8rem;
  }
`;

const DivListProjects = styled.div`
  ${cssDivList}
`;

const ULList = styled.ul`
  ${cssULList}
`;

const DivLinks = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-heading-primary);
  a {
    display: inline-block;
    text-decoration: none;
    line-height: 1;
    cursor: pointer;
    &.heroku {
      ${cssSmallButton}
    }
    svg {
      width: 4rem;
      height: 4rem;
      pointer-events: none;
    }
  }
`;

Projects.propTypes = {};

export default Projects;
