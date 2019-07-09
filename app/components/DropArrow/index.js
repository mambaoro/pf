/**
 *
 * DropArrow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cssDropArrow } from '../../base';

const SVG = styled.svg`
  ${cssDropArrow}
`;

function DropArrow({ isDropped }) {
  return (
    (!isDropped && (
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        viewBox="0 0 255 255"
        x="0px"
        y="0px"
        width="255px"
        height="255px"
        xmlnsXml="http://www.w3.org/XML/1998/namespace"
        xmlSpace="preserve"
        version="1.1"
      >
        <g>
          <g id="arrow-drop-down">
            <polygon points="0,63.75 127.5,191.25 255,63.75" />
          </g>
        </g>
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
      </SVG>
    )) || (
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        viewBox="0 0 255 255"
        x="0px"
        y="0px"
        width="255px"
        height="255px"
        xmlnsXml="http://www.w3.org/XML/1998/namespace"
        xmlSpace="preserve"
        version="1.1"
      >
        <g>
          <g id="arrow-drop-up">
            <polygon points="0,191.25 127.5,63.75 255,191.25" />
          </g>
        </g>
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
      </SVG>
    )
  );
}

DropArrow.propTypes = {
  isDropped: PropTypes.bool,
};

export default DropArrow;
