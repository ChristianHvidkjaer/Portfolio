import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavContactInfo,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    const path = window.location.href;
    if (path.includes("#")) {
      var id = `${path.substring(path.indexOf("#") + 1)}`
      id = id.replace("/", "");
      const anchor = document.getElementById(id)
      if(anchor){
        anchor.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [scrollNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Christian Hvidkjær
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavContactInfo>christian.hvidkjaer@gmail.com</NavContactInfo>
              </NavItem>
            </NavMenu>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              
              <NavItem>
                <NavLinks
                  to="qualifications"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Qualifications
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Portfolio
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

//offset={-80}

export default Navbar;

/*

<NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Christian Hvidkjær
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavContactInfo>christian.hvidkjaer@gmail.com</NavContactInfo>
              </NavItem>
            </NavMenu>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="qualifications"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Qualifications
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
          */