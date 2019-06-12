/*
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/TopBar/Loadable';
import Slider from '../../components/Homepage/SliderContainer/Loadable';
import AboutMe from '../../components/Homepage/AboutMe/Loadable';
import Projects from '../../components/Homepage/Projects/Loadable';
import Skills from '../../components/Homepage/Skills/Loadable';
import Contact from '../../components/Contact/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import { cssPageContainer } from '../../base';

function Homepage() {
  return (
    <Container>
      <TopBar />
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
