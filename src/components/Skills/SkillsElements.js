import styled from "styled-components";
import { BiBracket, BiMobileAlt, BiServer, BiCylinder, BiCloud, BiCode, BiLaptop, BiWrench, BiPaint } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const SkillsContainer = styled.div`
  height: auto;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: auto;
    min-height: 800px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 800px;
  }
`;
//height: 1000px;
//height: 1300px;
//height: 2150px;

export const SkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  grid-gap: 16px;
  padding: 0px 50px;
  padding-bottom: 32px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 32px;
    padding-bottom: 32px;
  }
`;

export const SkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 640px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const SkillsH1 = styled.h1`
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 32px;
  color: rgb(1, 191, 113);
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`;

export const SkillsTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  margin: 0.75rem;
  font-size: ${({ large }) => (large ? "2rem" : "1rem")};
`;

export const SkillsIcon = styled(BiBracket)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconMobile = styled(BiMobileAlt)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconServer = styled(BiServer)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconDatabase = styled(BiCylinder)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconCloud = styled(BiCloud)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconCode = styled(BiCode)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconFrontendFramework = styled(BiLaptop)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconTools = styled(BiWrench)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;

export const SkillsIconFrontend = styled(BiPaint)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
`;


export const SkillsArrow = styled(FaAngleDown)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
  margin-left: auto;
  transition: 0.4s;
`;

export const SkillsArrowUp = styled(FaAngleUp)`
  font-size: 2rem;
  color: rgb(1, 191, 113);
  margin-left: auto;
  transition: 0.4s;
`;

export const SkillsName = styled.h3`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: rgb(1, 191, 113);
`;

export const SkillsNameList = styled.div`
  width: 100%;
  max-width: 540px;
  padding-top: 0;
  
  
  overflow: hidden;
  transition: max-height 0.2s ease-out;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
