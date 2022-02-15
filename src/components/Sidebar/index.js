import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="qualifications" onClick={toggle} offset={-80}>
            Qualifications
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle} offset={-80}>
            Skills
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle} offset={-80}>
            Portfolio
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;

/*
<SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} offset={-80}>
            About
          </SidebarLink>
          <SidebarLink to="qualifications" onClick={toggle} offset={-80}>
            Qualifications
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle} offset={-80}>
            Skills
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle} offset={-80}>
            Portfolio
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle} offset={-80}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
      */