/**
 *
 * SliderContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import quoteList from './quoteList';

function SliderContainer() {
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
    <Section>
      <Slider {...settings}>
        {quoteList.map(quote => (
          <div>
            <p>&ldquo;{quote}&rdquo;</p>
          </div>
        ))}
      </Slider>
    </Section>
  );
}

const Section = styled.section`
  justify-self: center;
  width: 27.5rem;
  div {
    margin: 0 auto;
    p {
      font-size: 3.559rem;
      text-align: center;
      margin: 0;
      background: linear-gradient(180deg, #29323c 0%, #485563 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

SliderContainer.propTypes = {};

export default SliderContainer;
