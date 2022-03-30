import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const CarouselContainer = styled.section`
  position: relative;
  height: 90%;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  //margin: 24px;

  @media screen and (max-width: 950px) {
    max-height: 400px;
  }

  @media screen and (max-width: 500px) {
    max-height: 300px;
  }

  @media screen and (max-width: 350px) {
    max-height: 200px;
  }
`;

export const LeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 100%;
  left: 32px;
  min-width: 48px;
  min-height: 48px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
    top: 90%;
  }

  @media screen and (max-width: 1200px) {
    left: 0px;
    width: 32px;
    min-width: 32px;
    max-width: 32px;
    height: 32px;
    min-height: 32px;
    max-height: 32px;
    font-size: 2rem;
    top: 95%;
  }
`;

export const RightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 100%;
  right: 32px;
  min-width: 48px;
  min-height: 48px;
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
    top: 90%;
  }

  @media screen and (max-width: 1200px) {
    right: 0px;
    width: 32px;
    min-width: 32px;
    max-width: 32px;
    height: 32px;
    min-height: 32px;
    max-height: 32px;
    font-size: 2rem;
    top: 95%;
  }
`;

export const CarouselSlide = styled.div`
  opacity: 0;
  transition-duration: 1s ease;

  //max-height: inherit;
  //max-width: inherit;
`;

export const CarouselImage = styled.div`
   width: 100%;
  border-radius: 10px;
`;