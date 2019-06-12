/**
 *
 * AboutMe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from '../../components/TopBar/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import Breadcrumb from '../../components/Breadcrumb/Loadable';
import Content from '../../components/AboutMe/Content/Loadable';
import Contact from '../../components/Contact/Loadable';
import { cssPageContainer } from '../../base';

function AboutMe() {
  return (
    <Container>
      <TopBar />
      <Breadcrumb currentPage="About me" />
      <Content />
      <Contact />
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  ${cssPageContainer}
`;

AboutMe.propTypes = {};

export default AboutMe;
