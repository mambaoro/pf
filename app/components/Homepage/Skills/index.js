/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/**

 *

 * Skills

 *

 */

import React from 'react';

// import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Subscribe } from 'unstated';
import AOS from 'aos';
import DropFE from './DropFE';
import DropBE from './DropBE';
import DropUX from './DropUX';
import DropArrow from '../../DropArrow/Loadable';
import 'aos/dist/aos.css';
import { cssDivHeadings, cssDivList, cssULList } from '../../../base';

AOS.init();

function Skills() {
  return (
    <Subscribe to={[DropFE, DropBE, DropUX]}>
      {(dropFE, dropBE, dropUX) => (
        <Section>
          <DivHeadings>
            <h1>Skills</h1>
          </DivHeadings>

          <DivListProjects>
            <ULList data-aos="fade-right">
              <article>
                <li>
                  <p>Front-End</p>
                  <div onClick={e => dropFE.toggleDrop(e)}>
                    <DropArrow isDropped={dropFE.state.isDropped} />
                  </div>
                </li>
              </article>
              <article>
                <li>
                  <p>Back-End</p>
                  <div onClick={e => dropBE.toggleDrop(e)}>
                    <DropArrow isDropped={dropBE.state.isDropped} />
                  </div>
                </li>
              </article>
              <article>
                <li>
                  <p>UI Design</p>
                  <div onClick={e => dropUX.toggleDrop(e)}>
                    <DropArrow isDropped={dropUX.state.isDropped} />
                  </div>
                </li>
              </article>
            </ULList>
          </DivListProjects>
        </Section>
      )}
    </Subscribe>
  );
}

const Section = styled.section``;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  padding: 1.2rem 0 1.2rem 0;
  h1 {
    margin: 0.8rem 0;
  }
`;

const DivListProjects = styled.div`
  ${cssDivList}
`;

const ULList = styled.ul`
  ${cssULList}

  article {
    li {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        margin: 0;
        margin-right: 1.5rem;
        width: 9.3rem;
      }
    }
  }
`;

Skills.propTypes = {};

export default Skills;
