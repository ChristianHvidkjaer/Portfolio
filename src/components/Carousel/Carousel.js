import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {
  CarouselContainer,
  LeftArrow,
  RightArrow,
  CarouselSlide,
  CarouselImage
} from "./CarouselElements";
const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <CarouselContainer style={{height: "90%"}}>
      <LeftArrow onClick={prevSlide} />
      {slides.map((slide, index) => {
        return (
          <CarouselSlide
            current={current}
            key={index}
            className={index === current ? "slide active" : "slide"}
            style={{height: index === current ? "100%": 0, width: index === current ? "100%": 0}}
          >
            {index === current && (
              <img src={slide.image} alt="image" className="carousel-image" />
            )}
          </CarouselSlide>
        );
      })}
      <RightArrow onClick={nextSlide} />
    </CarouselContainer>
  );
};

export default Carousel;

/*

<section className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />

      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="image" className="carousel-image" />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
    </section>

*/

/*
<CarouselContainer style={{height: "90%"}}>
      <LeftArrow onClick={prevSlide} />

      {slides.map((slide, index) => {
        return (
          <CarouselSlide
            current={current}
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img src={slide.image} alt="image" className="carousel-image" />
            )}
          </CarouselSlide>
        );
      })}
      <RightArrow onClick={nextSlide} />
    </CarouselContainer>
*/
