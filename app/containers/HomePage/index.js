/* eslint-disable jsx-a11y/media-has-caption */
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
import video from '../../videos/Bed-Phone.mp4';

const css1Bp1000 = css`
  padding: 0 3rem;
`;

const Container = styled.div`
  ${cssPageContainer}
  padding: 0;
  display: grid;
  grid-template-rows: repeat(3, min-content);
  .video-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .color-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(224, 224, 224, 0.8);
  }
  ${media(css1Bp1000, bp.bp1000)}
`;

function Homepage() {
  const doc = document.documentElement;
  const [clientWidth, setClientWidth] = useState(doc.clientWidth);
  // eslint-disable-next-line func-names
  addEvent(window, 'resize', () => setClientWidth(doc.clientWidth));
  return (
    <Container>
      {clientWidth >= 1000 && (
        <div className="video-wrapper">
          <div className="color-layer">&nbsp;</div>
          <video src={video} autoPlay loop></video>
        </div>
      )}
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

export default Homepage;
