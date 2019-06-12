/**
 *
 * FrontEnd
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
import skillList from '../../components/FrontEnd/skillList';

function FrontEnd() {
  return (
    <Container>
      <TopBar />
      <Breadcrumb currentPage="Front-end" />
      <Content skillList={skillList} />
      <Contact />
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  ${cssPageContainer}
`;

FrontEnd.propTypes = {};

export default FrontEnd;
