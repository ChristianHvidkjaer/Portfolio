import React, { useState } from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../components/InfoSection/Data";
import Services from "../components/Services/Index";
import Qualifications from "../components/Qualifications";
import Skills from "../components/Skills";
import { Modal } from "../components/Modal";

const Home = () => {
  const [showModal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log("showModal" + showModal);
    setSelectedItem(item);
    setModal((prev) => !prev);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "auto"}}>
        
        <InfoSection {...homeObjOne} />
        <Qualifications />
        <Skills />
        <Services openModal={openModal} />
        <Modal showModal={showModal} setModal={setModal} item={selectedItem} />
      </div>
    </>
  );
};

export default Home;

/*
<>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Qualifications/>
      <Skills/>
      <Services/>
      <InfoSection {...homeObjFour} />
      <Footer/>
    </>
    */
