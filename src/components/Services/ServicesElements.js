import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: "#010606";
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
//height: 1100px;
//height: 1100px;
//height: 1300px;

export const ServicesWrapper = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  display: grid;
  align-items: stretch;
  grid-gap: 16px;
  padding: 15px 50px;
  grid-template-columns: 1fr 1fr 1fr;
  transition: 1.3s;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
`;

export const ServicesWrapperHighlighted = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  display: grid;
  align-items: stretch;
  grid-gap: 16px;
  padding: 15px 50px;
  grid-template-columns: 1fr 1fr 1fr;
  transition: 1.3s;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
`;

export const ServicesFilterContainer = styled.div`
  width: 500px;
  max-width: fit-content;
  padding: 8px;
  border-bottom: 2px solid rgb(1, 191, 113);

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

export const ServicesTagWrapper = styled.div`
  min-height: 40px;
  max-width: 200px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 8px 16px;
  padding: 0 50px;
  grid-template-columns: auto auto auto auto auto;
  justify-content: center;
  justify-items: stretch;
  margin-top: 12px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: auto auto auto;
  }
`;

export const ServicesTagPillWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ServicesCard = styled.div`
  background: "#fff";
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 496px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: "#fff";
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  word-break: break-all;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  max-height: 80px;
  @media screen and (max-width: 600px) {
    font-size: 0.80rem;
  }
`;

export const ServicesTab = styled.div`
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 800px;
`;

export const ServicesSocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  width: 100%;
  margin: 12px;
`;

export const SerivesSocialIconLink = styled.a`
  color: #000;
  font-size: 48px;

  @media screen and (max-width: 1400px) {
    font-size: 36px;
  }
`;

export const PortfolioButton = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: 8px 16px;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: "16px";
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 100%;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  //width: 100%;
  position: relative;

  margin-right: 0.1em;
  font-size: 1em;
  padding: 16px 64px;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "rgb(1, 191, 113)" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  min-width: 100px;

  :hover {
    background-color: white;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 48px;
  }

  @media screen and (max-width: 480px) {
    padding: 16px 32px;
  }
`;

export const Tabs = styled.div`
  max-width: 1700px;
  margin: 0 auto;
  display: grid;
  align-items: stretch;
  grid-gap: 16px;
  grid-template-columns: auto auto auto;
  transition: 1.3s;
  height: 3em;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto auto;
    padding: 20px 20px;
  }
`;

export const ServicesTestContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: "#010606";
  margin-bottom: 32px;
  margin-top: 32px;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ServiceHr = styled.hr`
  max-width: 1700px;
  width: 100%;
  margin-top: 0.25rem;
  border: 2px solid rgb(1, 191, 113);
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;

/*
  grid-template-areas:
    "serviceCard__item serviceCard__item serviceCard__item"
    "servicePanel servicePanel servicePanel";
  grid-template-columns: 1fr 1fr 1fr;

  .servicePanel__item {
    grid-area: servicePanel;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3,260px);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "serviceCard__item"
      "servicePanel";
    padding: 0 20px;
  }

*/

/*

#& ${ServicesPanel}:nth-child(2n+0) {
    background: blue;
    grid-row-start:4;
    grid-row-end:4;
  }

grid-template-areas:
      "serviceCard__item serviceCard__item serviceCard__item"
      "servicePanel servicePanel servicePanel";

  .servicePanel__item {
    grid-area: servicePanel;

    .serviceCard__item_1 {
    grid-row-start: 1;
  }

  .servicePanel__item_1 {
    grid-row-start: 2;
  }

  .serviceCard__item_2 {
    grid-row-start: 3;
  }

  .servicePanel__item_2 {
    grid-row-start: 4;
  }
  }*/
