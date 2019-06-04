/**
 *
 * SliderContainer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

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
        <div>
          <p>&ldquo;Accio che vostro quali&rdquo;</p>
        </div>
        <div>
          <p>&ldquo;Seemed muse dwelt&rdquo;</p>
        </div>
        <div>
          <p>&ldquo;Denkst wort mal nied&rdquo;</p>
        </div>
        <div>
          <p>&ldquo;La bercé clapotement&rdquo;</p>
        </div>
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
      font-size: 4.187rem;
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
