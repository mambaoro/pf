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

function Homepage() {
  return (
    <Container>
      <TopBar />
      <Slider />
      <AboutMe />
      <Projects />
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(
    rgba(230, 233, 240, 0.8),
    rgba(230, 233, 240, 0.8)
  );
  background-size: cover, contain;
  background-position: center, top center;
  display: grid;
  grid-template-rows: repeat(3, min-content);
`;

export default Homepage;
