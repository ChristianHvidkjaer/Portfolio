import styled from "styled-components";

export const QualificationsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: "#010606";
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
//height: 1200px;
//margin-bottom: 32px;

export const QualificationsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const QualificationsTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 32px 32px;
  color: rgb(1, 191, 113);
`;

export const QualificationItem = styled.div`
  background: "#fff";
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /*  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  */
  transition: all 0.2s ease-in-out;
`;
