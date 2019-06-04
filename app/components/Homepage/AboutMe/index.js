/**
 *
 * AboutMe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

function AboutMe() {
  return (
    <Section>
      <DivHeadings>
        <H1>Mamadou Baoro</H1>
        <H2>Web Developer</H2>
      </DivHeadings>
    </Section>
  );
}

const Section = styled.section``;

const DivHeadings = styled.div`
  background: var(--gradient-primary);
  width: 100vw;
  text-align: center;
  vertical-align: middle;
  color: var(--color-heading-primary);
  border-radius: 5px 5px 0px 0px;
  margin: 3rem 0;
  padding: 0.5rem 0 1rem 0;
`;

const H1 = styled.h1`
  font-size: 2.2rem;
  line-height: 1.3;
`;

const H2 = styled.h2`
  font-size: 1.359rem;
`;

AboutMe.propTypes = {};

export default AboutMe;
