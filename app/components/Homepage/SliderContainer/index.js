/**
 *
 * SliderContainer
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import v4 from 'uuid/v4';
import Slider from 'react-slick';
import quoteList from './quoteList';
import addEvent from '../../../containers/HomePage/addEvent';

const Section = styled.section`
  margin-top: 6.5rem;
  justify-self: center;
  width: 75vw;
  div {
    margin: 0 auto;
    p {
      font-size: 3.559rem;
      text-align: center;
      margin: 0;
      background-image: linear-gradient(90deg, #2b5876 0%, #4e4376 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

function SliderContainer() {
  const doc = document.documentElement;
  const [clientWidth, setClientWidth] = useState(doc.clientWidth);
  addEvent(window, 'resize', () => {
    setClientWidth(doc.clientWidth);
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Section
      style={{
        marginTop: clientWidth >= 800 ? '12rem' : '6.5rem',
        marginBottom: clientWidth >= 800 ? '3rem' : '',
      }}
    >
      <Slider {...settings}>
        {quoteList.map(quote => (
          <div key={v4()}>
            <p>&ldquo;{quote}&rdquo;</p>
          </div>
        ))}
      </Slider>
    </Section>
  );
}

SliderContainer.propTypes = {};

export default SliderContainer;
