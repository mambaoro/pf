/**
 *
 * Projects
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cssDivHeadings } from '../../../base';
import projectList from './projectList';
import github from '../../../images/svg/icons8-github.svg';

function Projects() {
  return (
    <Section>
      <DivHeadings>
        <h1>Projects</h1>
      </DivHeadings>
      <DivListProjects>
        <ULList>
          {projectList.map(project => (
            <article>
              <li>
                <p>{project.label}</p>
                <DivLinks>
                  <a href={project.linkGitHub} target="_blank">
                    <object
                      data={github}
                      type="image/svg+xml"
                      aria-label="icon"
                    />
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
  background: var(--gradient-primary);
  padding: 0 1rem;
`;

const ULList = styled.ul`
  background-color: var(--bg-text-primary);
  font-size: var(--font-size-text-list);
  color: var(--color-text-primary);
  padding: 1.5rem 1.5rem 0 1.5rem;
  article {
    :not(last-child) {
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

const DivLinks = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  width: 50%;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-heading-primary);
  a {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    &.heroku {
      background: var(--gradient-primary);
      color: var(--color-heading-primary);
      border-radius: var(--border-radius-button);
      font-size: var(--font-size-text);
      padding: 0.5rem 1rem;
    }
    object {
      width: 4rem;
      height: 4rem;
      pointer-events: none;
    }
  }
`;

Projects.propTypes = {};

export default Projects;
