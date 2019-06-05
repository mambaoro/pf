/**
 *
 * TopBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import github from '../../images/svg/icons8-github.svg';
import filled from '../../images/svg/icons8-menu-filled.svg';

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
  align-self: start;
  margin: 2rem;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 90%;
  z-index: 100;
`;

const ObjectIconGit = styled.object`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
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
  width: 4rem;
  height: 4rem;
  pointer-events: none;
`;

TopBar.propTypes = {};

export default TopBar;
