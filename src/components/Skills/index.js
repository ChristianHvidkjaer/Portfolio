import React from "react";
import { BiBracket } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH1,
  SkillsH2,
  SkillsCard,
  SkillsTitle,
  SkillsIcon,
  SkillsArrow,
  SkillsName,
  SkillsNameList,
  SkillsIconFrontend,
  SkillsIconMobile,
  SkillsIconServer,
  SkillsIconCode,
  SkillsIconDatabase,
  SkillsIconTools,
  SkillsIconCloud,
  SkillsIconFrontendFramework,
} from "./SkillsElements";
import SkillsAccordionCard from "./SkillsAccordion";

const Skills = () => {

  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsH2>My Technical level</SkillsH2>
      <SkillsWrapper>
        <SkillsAccordionCard icon={<SkillsIconFrontendFramework />} title={"Frontend Frameworks"} skillsNameList={["React", "AngularJS", "Electron"]}/>
        <SkillsAccordionCard icon={<SkillsIconFrontend />} title={"Frontend Languages"} skillsNameList={["HTML","CSS","Sass", "Javascript"]}/>
        <SkillsAccordionCard icon={<SkillsIconMobile />} title={"Mobile Development"} skillsNameList={["React Native", "Xamarin"]}/>
        <SkillsAccordionCard icon={<SkillsIconServer />} title={"Backend Frameworks"} skillsNameList={["ASP.net / Core","Nodejs (Express)", "Django"]}/>
        <SkillsAccordionCard icon={<SkillsIconCode />} title={"Code Languages"} skillsNameList={["Java","C#","C++", "Python"]}/>
        <SkillsAccordionCard icon={<SkillsIconDatabase />} title={"Databases"} skillsNameList={["Microsoft SQL","MYSQL","PostgreSQL", "MongoDB", "Neo4J", "RavenDB"]}/>
        <SkillsAccordionCard icon={<SkillsIconTools />} title={"Tools"} skillsNameList={["Intellij / Android Studio","Visual Studio / Code","Jira", "Git hub", "Unity", "Blender"]}/>
        <SkillsAccordionCard icon={<SkillsIconCloud />} title={"Platforms"} skillsNameList={["Azure","EPI Server", "InRiver"]}/>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;

/*


<SkillsCard>
          <div className="skills__header">
            <SkillsIcon />
            <SkillsTitle>Frontend</SkillsTitle>
            <SkillsArrow onClick={handleOnClick}/>
          </div>
          <SkillsNameList>
            <SkillsName>HTML</SkillsName>
            <SkillsName>CSS</SkillsName>
            <SkillsName>Sass</SkillsName>
            <SkillsName>Javascript</SkillsName>
          </SkillsNameList>
        </SkillsCard>
        
                <SkillsCard>
          <div className="skills__header">
            <SkillsIcon />
            <SkillsTitle>Backend</SkillsTitle>
            <SkillsArrow />
          </div>
          <SkillsNameList>
            <SkillsName>Java</SkillsName>
            <SkillsName>C#</SkillsName>
            <SkillsName>C++</SkillsName>
            <SkillsName>Python</SkillsName>
          </SkillsNameList>
        </SkillsCard>
                <SkillsCard>
          <div className="skills__header">
            <SkillsIcon />
            <SkillsTitle>Frameworks</SkillsTitle>
            <SkillsArrow />
          </div>
          <SkillsNameList>
            <SkillsName>ASP.net</SkillsName>
            <SkillsName>Nodejs (Express)</SkillsName>
            <SkillsName>React</SkillsName>
            <SkillsName>React Native</SkillsName>
            <SkillsName>Electron</SkillsName>
            <SkillsName>Django</SkillsName>
            <SkillsName>AngularJS</SkillsName>
          </SkillsNameList>
        </SkillsCard>

        <SkillsCard>
          <div className="skills__header">
            <SkillsIcon />
            <SkillsTitle>Databases</SkillsTitle>
            <SkillsArrow />
          </div>
          <SkillsNameList>
            <SkillsName>Microsoft SQL</SkillsName>
            <SkillsName>MYSQL</SkillsName>
            <SkillsName>PostgreSQL</SkillsName>
            <SkillsName>MongoDB</SkillsName>
            <SkillsName>Neo4J</SkillsName>
            <SkillsName>RavenDB</SkillsName>
          </SkillsNameList>
        </SkillsCard>

        <SkillsCard>
          <div className="skills__header">
            <SkillsIcon />
            <SkillsTitle>Tools</SkillsTitle>
            <SkillsArrow />
          </div>
          <SkillsNameList>
            <SkillsName>Intellij / Android Studio</SkillsName>
            <SkillsName>Visual Studio / Code</SkillsName>
            <SkillsName>Jira</SkillsName>
            <SkillsName>Git hub</SkillsName>
            <SkillsName>Unity</SkillsName>
            <SkillsName>Blender</SkillsName>
          </SkillsNameList>
        </SkillsCard>

        <SkillsCard>
          <div className="skills__header">
            <SkillsIcon />
            <SkillsTitle>Platforms</SkillsTitle>
            <SkillsArrow />
          </div>
          <SkillsNameList>
            <SkillsName>Azure</SkillsName>
            <SkillsName>EPI Server</SkillsName>
            <SkillsName>InRiver</SkillsName>
          </SkillsNameList>
        </SkillsCard>
        */

/*
<section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className="skills__container container grid">
        <div>
          <div className="skills__content">
            <div className="skills__header">
              <BiBracket className="skills__icon" />
              <div>
                <h1 className="skills__titles">Frontend developer</h1>
                <span className="skills__subtitle"></span>
              </div>

              <FaAngleDown className="skills__arorow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">90%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">90%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__content">
            <div className="skills__header">
              <BiBracket className="skills__icon" />
              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle"></span>
              </div>

              <FaAngleDown className="skills__arorow" />
            </div>
            <div className="skills__list grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C#</h3>
                  <span className="skills__number">90%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">90%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__number">90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    */
