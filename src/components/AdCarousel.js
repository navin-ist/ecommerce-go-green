import React from 'react';
import { Carousel } from 'react-bootstrap';
import ad1 from '../assets/ad1.png';
import ad2 from '../assets/add.png';
import './AdCarousel.css';

function AdCarousel() {
  return (
    <div className="ad-carousel-container">
      <Carousel interval={1000} controls={false} indicators={false}>
        <Carousel.Item>
          <img src={ad1} alt="Ad 1" className="ad-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={ad2} alt="Ad 2" className="ad-img" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AdCarousel;
