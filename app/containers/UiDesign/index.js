/**
 *
 * UiDesign
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopBar from '../../components/TopBar/Loadable';
import TopNavBar from '../../components/TopNavBar/Loadable';
import Sidebar from '../../components/Sidebar/Loadable';
import Breadcrumb from '../../components/Breadcrumb/Loadable';
import Content from '../../components/Content/Loadable';
import Contact from '../../components/Contact/Loadable';
import { cssPageContainer } from '../../base';
import skillList from '../../components/UIDesign/skillList';
import addEvent from '../HomePage/addEvent';

function UiDesign() {
  const doc = document.documentElement;
  const [clientWidth, setClientWidth] = useState(doc.clientWidth);
  addEvent(window, 'resize', () => setClientWidth(doc.clientWidth));
  return (
    <Container>
      {clientWidth < 800 ? <TopBar /> : <TopNavBar />}
      <Breadcrumb currentPage="UI design" />
      <Content skillList={skillList} />
      <Contact />
      <Sidebar />
    </Container>
  );
}

const Container = styled.div`
  ${cssPageContainer}
`;

UiDesign.propTypes = {};

export default UiDesign;
