/**
 *
 * TopNavBar
 *
 */

import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubIcon from '../GithubIcon/Loadable';

const Div = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  width: 100vw;
  top: 0;
  left: 0;
  background: var(--gradient-primary);
  min-height: 6rem;
  max-height: 6rem;
  color: var(--bg-text-primary);
  z-index: 215;
  font-size: 1.631rem;
  font-weight: 900;
  margin-bottom: 3rem;
  border-radius: 0 0 5px 5px;
  box-shadow: var(--shadow);
  svg {
    flex-basis: 10%;
  }
  .active {
    border-bottom: 1px dotted var(--color-special-link);
  }
`;

const Nav = styled.nav`
  flex-basis: 100%;
  ul {
    display: flex;
    justify-content: center;
    li {
      padding: 0 1.5rem;
      border-left: 1px solid var(--color-special-link);
      margin: 0 5rem;
      transition: all 0.2s;
      p {
        cursor: pointer;
      }
      :hover {
        padding: 0 2rem;
        border-left: 2px solid var(--bg-button);
      }
      a:link,
      a:visited {
        text-decoration: none;
        color: var(--bg-text-primary);
        cursor: pointer;
        p {
          cursor: pointer;
        }
      }
    }
  }
`;

const DivSubNav = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  left: 0;
  width: 100%;
  min-height: 50%;
  background: var(--gradient-primary);
  ul {
    margin: 0 auto;
    li {
      border-top-left-radius: 2.5px;
      border-top-right-radius: 2.5px;
      padding: 1rem 1.5rem;
      a {
        vertical-align: middle;
      }
      :hover {
        padding: 1rem 1.5rem;
      }
      svg {
        height: 3rem;
        width: 3rem;
        margin-right: 1rem;
      }
    }
    li.front-end {
      border-left: 1px solid var(--color-react);
      background-color: var(--color-react);
    }
    li.back-end {
      border-left: 1px solid var(--color-node);
      background-color: var(--color-node);
    }
    li.ui {
      border-left: 1px solid var(--color-figma);
      background-color: var(--color-figma);
    }
    li.front-end,
    li.back-end,
    li.ui {
      :hover {
        background-color: var(--color-special-link);
      }
    }
  }
`;

function TopNavBar() {
  const [isOpen, setToggle] = useState(null);
  const dropdownMenu = useRef();
  const handleClick = e => {
    if (dropdownMenu.current && !dropdownMenu.current.contains(e.target)) {
      setToggle(!isOpen);
    }
  };
  // eslint-disable-next-line consistent-return
  const showMenu = () => {
    setToggle(true);
    document.addEventListener('click', handleClick);
  };
  return (
    <Div>
      <a href="https://github.com/mambaoro" target="_blank">
        <GithubIcon fill="#fafafa" />
      </a>
      <Nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about-me" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li onMouseOver={showMenu} onFocus={showMenu}>
            <p>Skills</p>
            {isOpen ? (
              <DivSubNav ref={dropdownMenu}>
                <ul>
                  <li className="front-end">
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#fafafa"
                        d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      />
                    </svg>
                    <NavLink exact to="/front-end" activeClassName="active">
                      Front-End
                    </NavLink>
                  </li>
                  <li className="back-end">
                    <svg viewBox="0 0 128 128">
                      <path
                        fill="#fafafa"
                        d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                      />
                    </svg>
                    <NavLink exact to="/back-end" activeClassName="active">
                      Back-End
                    </NavLink>
                  </li>
                  <li className="ui">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 7.678 7.68"
                      width="64"
                      height="64"
                    >
                      <path
                        fill="#0acf83"
                        d="M 2.56 7.68 A 1.28 1.28 0 0 0 3.84 6.4 V 5.12 H 2.56 a 1.28 1.28 0 0 0 0 2.56 Z"
                      />
                      <path
                        fill="#a259ff"
                        d="M 1.28 3.84 a 1.28 1.28 0 0 1 1.28 -1.28 h 1.28 v 2.56 H 2.56 a 1.28 1.28 0 0 1 -1.28 -1.28 Z"
                      />
                      <path
                        fill="#f24e1e"
                        d="M 1.28 1.28 A 1.28 1.28 0 0 1 2.559 0 h 1.28 v 2.56 H 2.56 a 1.28 1.28 0 0 1 -1.28 -1.28 Z"
                      />
                      <path
                        fill="#ff7262"
                        d="M 3.84 0 h 1.28 a 1.28 1.28 0 0 1 0 2.56 H 3.84 Z"
                      />
                      <path
                        fill="#1abcfe"
                        d="M 6.4 3.84 a 1.28 1.28 0 0 1 -2.56 0 a 1.28 1.28 0 0 1 2.56 0 Z"
                      />
                    </svg>
                    <NavLink exact to="/ui-design" activeClassName="active">
                      UI Design
                    </NavLink>
                  </li>
                </ul>
              </DivSubNav>
            ) : (
              ''
            )}
          </li>
        </ul>
      </Nav>
    </Div>
  );
}

TopNavBar.propTypes = {};

export default TopNavBar;
