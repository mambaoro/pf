/*
 * HomePage
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar/Loadable';
import TopNavBar from '../../components/TopNavBar/Loadable';
import Slider from '../../components/Homepage/SliderContainer/Loadable';
import AboutMe from '../../components/Homepage/AboutMe/Loadable';
import Projects from '../../components/Homepage/Projects/Loadable';
import Skills from '../../components/Homepage/Skills/Loadable';
import Contact from '../../components/Contact/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import { cssPageContainer } from '../../base';
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
      <Skills />
      <Contact />
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  ${cssPageContainer}
  padding: 0;
  background-size: cover, contain;
  background-position: center, top center;
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

export default Homepage;
