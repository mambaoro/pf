/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Breadcrumb({ currentPage }) {
  return (
    <Paragraph>
      <Link to="/">Home</Link> &gt; {currentPage}
    </Paragraph>
  );
}

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.2rem;
  a {
    color: var(--color-breadcrumb);
    text-decoration: none;
  }
`;

Breadcrumb.propTypes = {
  currentPage: PropTypes.string,
};

export default Breadcrumb;
