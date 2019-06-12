/**
 *
 * CrossIcon
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Subscribe } from 'unstated';
import SidebarContainer from '../Sidebar/StateSidebar';

function CrossIcon() {
  return (
    <Subscribe to={[SidebarContainer]}>
      {sidebar => (
        <svg
          fill="#2B5876"
          onClick={() => sidebar.handleToggle()}
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          viewBox="0 0 31.112 31.112"
          x="0px"
          y="0px"
          xmlnsXml="http://www.w3.org/XML/1998/namespace"
          xmlSpace="preserve"
          version="1.1"
        >
          <polygon points="31.112,1.414 29.698,0 15.556,14.142 1.414,0 0,1.414 14.142,15.556 0,29.698 1.414,31.112 15.556,16.97 29.698,31.112 31.112,29.698 16.97,15.556" />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      )}
    </Subscribe>
  );
}

CrossIcon.propTypes = {};

export default CrossIcon;
