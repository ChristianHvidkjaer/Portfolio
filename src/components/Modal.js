import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { PillButton } from "./ButtonElements";
import Carousel from "./Carousel/Carousel";
import { CarouselData } from "./Carousel/CarouselData";

const Background = styled.div`
  //width: auto;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2s);
  background: #fff;
  color: #000;
  //display: flex;
  //grid-template-columns: 1fr;
  //position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow-y: scroll;

  @media screen and (max-width: 950px) {
    grid-gap: 0px;
  }
`;

/*
const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2s);
  background: #fff;
  color: #000;
  display: flex;
  //grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;
*/

export const ModalRow = styled.div`
  display: grid;
  //grid-template-columns: 60fr 40fr;
  grid-auto-columns: 60fr 40fr;
  align-items: center;
  grid-template-areas: "col1 col2";
  min-width: 100%;
  height: 100%;

  @media screen and (max-width: 950px) {
    grid-template-areas: "col1" "col2";
    //grid-template-rows: 70fr 30fr;
    align-items: flex-start;
    grid-gap: 0px;
    height: 100%;

    @media screen and (max-width: 768px) {
      grid-gap: 0px;
    }
  }
`;
//grid-template-rows: 70fr 30fr;

/*
display: grid;
  //grid-template-columns: minmax(3fr, auto);
  //grid-auto-columns: 60fr 10fr;
  //grid-template-columns: 1fr;
  align-items: center;
  grid-template-areas: "col1 col2";
  min-width: 100%;
  grid-auto-columns: 1fr;
  //align-items: stretch;

  @media screen and (max-width: 768px) {
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .col1,
    .col2 {
      grid-column: auto;
      grid-row: auto;
    }
  }
*/
const ModalImg = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 10px 0 0 10px;
  background: #000;
  margin: 16px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin: 0px 16px;
  max-height: 95%;
  //overflow-y: scroll;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalCard = styled.div`
  background: "#fff";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  //padding: 16px;
  transition: all 0.2s ease-in-out;

  /*@media screen and (max-width: 950px) {
    min-height: 400px;
  }

  @media screen and (max-width: 500px) {
    min-height: 300px;
  }

  @media screen and (max-width: 350px) {
    min-height: 100px;
  }*/
`;

export const ModalTagWrapper = styled.div`
  //min-height: 10%;
  /*max-width: 200px;
  margin: 0 auto;*/
  display: grid;
  /*align-items: center;
  align-content: center;*/
  grid-gap: 8px 8px;
  /*padding: 0 50px;*/
  grid-template-columns: auto auto auto auto auto;
  /*justify-content: center;
  justify-items: stretch;
  margin-top: 8px;
  min-height: 60px;
  position: relative;*/

  @media screen and (max-width: 1400px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 950px) {
    font-size: 1.25em;
    margin-top: 32px;
  }

  /*@media screen and (max-width: 768px) {
    margin-top: 32px;
  }*/
`;

export const ModalSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  width: 100%;
  //position: fixed;
  top: 90%;

  @media screen and (max-width: 950px) {
    position: relative;
    top: 95%;
  }
`;

export const ModalTitle = styled.h1`
  @media screen and (max-width: 950px) {
    font-size: 1.25em;
  }
`;

export const ModalLongDescription = styled.p`
  word-break: "break-word";
  white-space: "normal";
  //overflow-y: scroll;

  @media screen and (max-width: 950px) {
    min-height: 100px;
  }
`;

export const ModalAnimatedDiv = styled(animated.div)`
  width: 80%;
  height: 80%;
  transform: scale(1);

  @media screen and (max-width: 950px) {
    width: 100%;
    font-size: 0.75em;
  }
`;

export const ModalSocialIconLink = styled.a`
  color: #000;
  font-size: 32px;
`;

export const Modal = ({ showModal, setModal, item }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
      transform: "scale(0)",
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  const keyPres = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setModal(false);
      }
    },
    [setModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPres);
    return () => document.removeEventListener("keydown", keyPres);
  }, [keyPres]);

  console.log("item", item);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalAnimatedDiv style={animation}>
            <ModalWrapper showModal={showModal}>
                <ModalCard style={{ gridArea: "col1" }}>
                  <Carousel slides={item.images} />

                  <ModalTagWrapper>
                    {item.tags.sort((a,b) => a.order - b.order).map((tag, index) => (
                      <PillButton
                        color={tag.color}
                        hovercolor={tag.colorSelected}
                        key={index}
                        style={{
                          background: tag.color,
                        }}
                      >
                        {tag.name}
                      </PillButton>
                    ))}
                  </ModalTagWrapper>
                </ModalCard>

                <ModalContent style={{ gridArea: "col2" }}>
                  <ModalTitle>{item.title}</ModalTitle>
                  <ModalLongDescription>
                    {item.longDescription}
                  </ModalLongDescription>
                  
                  <ModalSocialIcons>
                    {item.links.map((link, index) => (
                      <ModalSocialIconLink
                        href={link.ref}
                        target="_blank"
                        aria-label={link.label}
                        key={index}
                      >
                        {link.icon}
                      </ModalSocialIconLink>
                    ))}
                  </ModalSocialIcons>
                  
                </ModalContent>


              <CloseModalButton
                aria-label="Close Modal"
                onClick={() => setModal((prev) => !prev)}
              />
            </ModalWrapper>
          </ModalAnimatedDiv>
        </Background>
      ) : null}
    </>
  );
};
//<ModalImg src={require("./modal.jpg")} alt="camera" />
//<ModalImg src={require("../images/profile.jpg")} alt="img" />

/*
const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    width: "80%",
    height: "80%",
  });
*/

/*

<animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalRow>
                <ModalCard style={{ gridArea: "col1" }}>
                  <Carousel slides={item.images} />

                  <ModalTagWrapper>
                    {item.tags.map((tag, index) => (
                      <PillButton
                        color={tag.color}
                        hovercolor={tag.colorSelected}
                        key={index}
                        style={{
                          background: tag.color,
                        }}
                      >
                        {tag.name}
                      </PillButton>
                    ))}
                  </ModalTagWrapper>
                </ModalCard>

                <ModalContent style={{ gridArea: "col2" }}>
                  <ModalTitle>{item.title}</ModalTitle>
                  <ModalLongDescription>
                    {item.longDescription}
                  </ModalLongDescription>
                  <ModalSocialIcons>
                    {item.links.map((link, index) => (
                      <ModalSocialIconLink
                        href={link.ref}
                        target="_blank"
                        aria-label={link.label}
                        key={index}
                      >
                        {link.icon}
                      </ModalSocialIconLink>
                    ))}
                  </ModalSocialIcons>
                </ModalContent>
                <CloseModalButton
                  aria-label="Close Modal"
                  onClick={() => setModal((prev) => !prev)}
                />
              </ModalRow>
            </ModalWrapper>
          </animated.div>

*/
