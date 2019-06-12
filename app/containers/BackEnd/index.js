/**
 *
 * BackEnd
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from '../../components/TopBar/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import Breadcrumb from '../../components/Breadcrumb/Loadable';
import Content from '../../components/Content/Loadable';
import Contact from '../../components/Contact/Loadable';
import { cssPageContainer } from '../../base';
import skillList from '../../components/BackEnd/skillList';

function BackEnd() {
  return (
    <Container>
      <TopBar />
      <Breadcrumb currentPage="Back-end" />
      <Content skillList={skillList} />
      <Contact />
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  ${cssPageContainer}
`;

BackEnd.propTypes = {};

export default BackEnd;
