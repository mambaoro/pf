/*
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/Homepage/TopBar';
import squairy from '../../images/squairy_light.png';

/* eslint-disable react/prefer-stateless-function */
function Homepage() {
  return (
    <Container>
      <TopBar />
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(
      rgba(230, 233, 240, 0.8),
      rgba(230, 233, 240, 0.8)
    ),
    url(${squairy});
  background-size: cover, contain;
  background-position: center, top center;
  height: 100vh;
  display: grid;
`;

export default Homepage;
