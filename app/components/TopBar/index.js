/**
 *
 * TopBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import SidebarContainer from '../Sidebar/StateSidebar';
import SvgGitHub from '../GithubIcon/Loadable';
import SvgCrossIcon from '../CrossIcon/Loadable';
import filled from '../../images/svg/icons8-menu-filled.svg';

const Div = styled.div`
  display: flex;
  align-self: start;
  margin: 1rem 3rem 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 100;
  svg {
    width: 4rem;
    cursor: pointer;
  }
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

function TopBar() {
  return (
    <Subscribe to={[SidebarContainer]}>
      {sidebar => (
        <Div>
          <LinkIconMenu href="https://github.com/mambaoro" target="_blank">
            <SvgGitHub />
          </LinkIconMenu>
          {!sidebar.state.isOpen ? (
            <LinkIconMenu onClick={() => sidebar.handleToggle()}>
              <ObjectIconMenu data={filled} type="image/svg+xml" />
            </LinkIconMenu>
          ) : (
            <SvgCrossIcon />
          )}
        </Div>
      )}
    </Subscribe>
  );
}

TopBar.propTypes = {};

export default TopBar;
