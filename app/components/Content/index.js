/**
 *
 * Content
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import v4 from 'uuid/v4';

import { cssDivList, cssDivHeadings } from '../../base';

function Content(props) {
  return (
    <ListSkills>
      {props.skillList.map(skill => (
        <ListItemSkill key={v4()}>
          <DivHeadings>
            <h1>{skill.heading}</h1>
            <h2>{skill.subheading}</h2>
          </DivHeadings>
          <DivDescription>{skill.description}</DivDescription>
        </ListItemSkill>
      ))}
    </ListSkills>
  );
}

const ListSkills = styled.ul``;

const ListItemSkill = styled.li`
  :first-child {
    margin-top: 3rem;
  }
  margin: 0 auto;
  list-style: none;
`;

const DivHeadings = styled.div`
  ${cssDivHeadings}
  margin-top: 0 !important;
  h2 {
    width: 60%;
    margin: 0 auto;
    line-height: 1.2;
  }
`;

const DivDescription = styled.div`
  ${cssDivList}
  background: var(--bg-text-primary);
  padding: 1.5rem;
  font-size: var(--font-size-text);
  text-align: center;
  min-height: 20rem;
  color: var(--color-text-primary);
`;

Content.propTypes = {
  skillList: PropTypes.array,
};

export default Content;
