/**
 *
 * TopBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import github from '../../../images/svg/icons8-github.svg';
import filled from '../../../images/svg/icons8-menu-filled.svg';

function TopBar() {
  return (
    <Div>
      <LinkIconMenu href="https://github.com/mambaoro" target="_blank">
        <ObjectIconGit data={github} type="image/svg+xml" />
      </LinkIconMenu>
      <LinkIconMenu href="#">
        <ObjectIconMenu data={filled} type="image/svg+xml" />
      </LinkIconMenu>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 1rem;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const ObjectIconGit = styled.object`
  display: block;
  width: 3.15rem;
  height: 3.15rem;
  margin-left: -4px;
  pointer-events: none;
`;

const LinkIconMenu = styled.a`
  display: inline-block;
  margin: 0;
  line-height: 0;
  cursor: pointer;
`;

const ObjectIconMenu = styled.object`
  width: 2.5rem;
  height: 2.5rem;
  pointer-events: none;
`;

TopBar.propTypes = {};

export default TopBar;
