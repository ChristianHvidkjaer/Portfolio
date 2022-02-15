import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./PortfolioDetailElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import { NavLink as LinkR } from "react-router-dom";

const PortfolioDetail = () => {
  const [hover, setHover] = useState(false);

  const onhover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/about"
            onMouseEnter={onhover}
            onMouseLeave={onhover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <LinkR to="/" activeClassName="about">
            React
          </LinkR>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default PortfolioDetail;
