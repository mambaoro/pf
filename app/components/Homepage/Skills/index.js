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
import posed from 'react-pose';
import { Subscribe } from 'unstated';
import AOS from 'aos';
import DropFE from './DropFE';
import DropBE from './DropBE';
import DropUX from './DropUX';
import DropArrow from '../../DropArrow/Loadable';
import 'aos/dist/aos.css';
import {
  cssDivHeadings,
  cssDivList,
  cssULList,
  cssSmallButton,
} from '../../../base';
import { frontEndSkills, backEndSkills, uiuxSkills } from './skill_ItemList';

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
                <ULSkillList pose={!dropFE.state.isDropped ? 'closed' : 'open'}>
                  {frontEndSkills.map(skill => (
                    <ListSkillItem>{skill}</ListSkillItem>
                  ))}
                  <ButtonSkillPage href="#">See details</ButtonSkillPage>
                </ULSkillList>
              </article>
              <article>
                <li>
                  <p>Back-End</p>
                  <div onClick={e => dropBE.toggleDrop(e)}>
                    <DropArrow isDropped={dropBE.state.isDropped} />
                  </div>
                </li>
                <ULSkillList pose={!dropBE.state.isDropped ? 'closed' : 'open'}>
                  {backEndSkills.map(skill => (
                    <ListSkillItem>{skill}</ListSkillItem>
                  ))}
                  <ButtonSkillPage href="#">See details</ButtonSkillPage>
                </ULSkillList>
              </article>
              <article>
                <li>
                  <p>UI Design</p>
                  <div onClick={e => dropUX.toggleDrop(e)}>
                    <DropArrow isDropped={dropUX.state.isDropped} />
                  </div>
                </li>
                <ULSkillList pose={!dropUX.state.isDropped ? 'closed' : 'open'}>
                  {uiuxSkills.map(skill => (
                    <ListSkillItem>{skill}</ListSkillItem>
                  ))}
                  <ButtonSkillPage href="#">See details</ButtonSkillPage>
                </ULSkillList>
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
      overflow: hidden;
      p {
        margin: 0;
        margin-right: 1.5rem;
        width: 9.3rem;
      }
    }
  }
`;

const posedListProps = {
  closed: { height: 0, duration: 150 },
  open: { height: 'auto' },
};

const posedItemProps = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: 'auto' },
};

const ULSkillList = styled(posed.ul(posedListProps))`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, minmax(5.4rem, 1fr));
  grid-column-gap: 1.5rem;
  background-color: var(--bg-text-primary);
  font-size: 1.8rem;
  margin-top: 1.5rem;
  li {
    border-bottom: 4px solid var(--color-gradient-1);
    padding-bottom: 1rem;
    font-weight: 900;
  }
  a {
    ${cssSmallButton}
    display: inline-block;
    min-height: 4rem;
    max-height: 4rem;
    justify-self: center;
    grid-column: 1 / span 2;
    margin-top: 1.5rem;
    text-decoration: none;
    padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  }
`;

const ListSkillItem = posed.li(posedItemProps);

const ButtonSkillPage = posed.a(posedItemProps);
Skills.propTypes = {};

export default Skills;
