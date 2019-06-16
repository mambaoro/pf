/*
 * HomePage
 *
 */

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TopBar from '../../components/TopBar/Loadable';
import TopNavBar from '../../components/TopNavBar/Loadable';
import Slider from '../../components/Homepage/SliderContainer/Loadable';
import AboutMe from '../../components/Homepage/AboutMe/Loadable';
import Projects from '../../components/Homepage/Projects/Loadable';
import Skills from '../../components/Homepage/Skills/Loadable';
import SkillsCards from '../../components/Homepage/SkillsDesktop/Loadable';
import Contact from '../../components/Contact/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import { cssPageContainer, media, bp } from '../../base';
import addEvent from './addEvent';

function Homepage() {
  const doc = document.documentElement;
  const [clientWidth, setClientWidth] = useState(doc.clientWidth);
  // eslint-disable-next-line func-names
  addEvent(window, 'resize', () => setClientWidth(doc.clientWidth));
  return (
    <Container>
      {clientWidth < 800 ? <TopBar /> : <TopNavBar />}
      <Slider />
      <AboutMe />
      <Projects />
      {clientWidth < 1000 ? <Skills /> : <SkillsCards />}
      <Contact />
      <Sidebar />
    </Container>
  );
}

const css1Bp1000 = css`
  padding: 0 3rem;
`;

const Container = styled.div`
  ${cssPageContainer}
  padding: 0;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  ${media(css1Bp1000, bp.bp1000)}
`;

export default Homepage;
