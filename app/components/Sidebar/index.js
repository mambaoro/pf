/**
 *
 * Sidebar
 *
 */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Subscribe } from 'unstated';
import posed from 'react-pose';
import SidebarContainer from './StateSidebar';

function Sidebar() {
  const [ListIsActive, setListActive] = useState(false);
  const handleClick = () => setListActive(true);
  return (
    <Subscribe to={[SidebarContainer]}>
      {sidebar => (
        <NavSideBar pose={!sidebar.state.isOpen ? 'closed' : 'open'}>
          <div>
            <NavLink
              to="/"
              exact
              className="home"
              activeClassName="active"
              onClick={() => sidebar.handleToggle()}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about-me"
              exact
              className="about-me"
              activeClassName="active"
              onClick={() => sidebar.handleToggle()}
            >
              About Me
            </NavLink>
          </div>
          <DivSkills onClick={handleClick}>
            {!ListIsActive ? (
              <p className="skills">Skills</p>
            ) : (
              <ul>
                <li className="front-end">
                  <NavLink
                    to="/front-end"
                    exact
                    activeClassName="active"
                    onClick={() => sidebar.handleToggle()}
                  >
                    Front-End
                  </NavLink>
                </li>
                <li className="back-end">
                  <NavLink
                    to="/back-end"
                    exact
                    activeClassName="active"
                    onClick={() => sidebar.handleToggle()}
                  >
                    Back-End
                  </NavLink>
                </li>
                <li className="ui">
                  <NavLink
                    to="/ui-design"
                    exact
                    activeClassName="active"
                    onClick={() => sidebar.handleToggle()}
                  >
                    UI Design
                  </NavLink>
                </li>
              </ul>
            )}
          </DivSkills>
        </NavSideBar>
      )}
    </Subscribe>
  );
}

const posedNavProps = {
  closed: { x: '-100%', transition: { ease: 'easeInOut' }, opacity: 0 },
  open: { x: '0%', transition: { ease: 'easeInOut' }, opacity: 1 },
};

const NavSideBar = styled(posed.nav(posedNavProps))`
  display: grid;
  grid-template-rows: repeat(3, calc(100vh / 3));
  position: fixed;
  top: 0;
  left: 0;
  background: var(--gradient-primary);
  grid-row: 1 / -1;
  min-height: 100vh;
  width: 75vw;
  color: var(--bg-text-primary);
  z-index: 100;
  font-size: 2.588rem;
  div {
    display: grid;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid var(--color-heading-primary);
    p,
    a {
      cursor: pointer;
      width: 100%;
      height: 100%;
      padding-top: 43%;
    }
    a {
      display: block;
      text-decoration: none;
      color: inherit;
    }
    a.home {
      padding-left: 38%;
    }
    a.about-me {
      padding-left: 29%;
    }
    p.skills {
      padding-left: 39%;
    }
    .active {
      background-color: palevioletred;
      color: #fafafa;
    }
    :hover {
      background-color: var(--bg-text-primary);
      color: var(--color-text-primary);
    }
  }
`;

const DivSkills = styled.div`
  ul {
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    li {
      width: 100%;
      text-align: center;
      display: grid;
      a {
        display: block;
        padding-top: 10%;
        .active {
          background-color: palevioletred;
          color: #fafafa;
        }
        :hover {
          text-decoration: underline;
        }
      }
    }
    li.front-end {
      background-color: var(--color-react);
    }
    li.back-end {
      background-color: var(--color-node);
    }
    li.ui {
      background-color: var(--color-figma);
    }
    :hover {
      color: var(--bg-text-primary);
    }
  }
`;

Sidebar.propTypes = {};

export default Sidebar;
