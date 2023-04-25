import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import {
  QualificationsContainer,
  QualificationsWrapper,
  QualificationsTitle,
  QualificationItem,
} from "./QualificationElements";

const Qualifications = () => {
  return (
    <QualificationsContainer id="qualifications">
      <QualificationsTitle>Qualifications</QualificationsTitle>
      <QualificationsWrapper>
        <QualificationItem>
          <h2 style={{ textDecoration: "underline" }}>Education</h2>
          <VerticalTimeline
            className={"test"}
            style={{ maxWidth: "200px" }}
            layout="1-column-right"
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderLeft: "7px solid  rgb(1, 191, 113)",
              }}
              date="2016 - 2018"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Copenhagen School of Design and Technology
              </h4>
              <p>Academy Profession Degree</p>
              <p>
                Programming, Code Design, Development Approaches,
                Web-Development
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderLeft: "7px solid  rgb(1, 191, 113)",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Copenhagen School of Design and Technology
              </h4>
              <p>Bachelor Degree</p>
              <p>
                Testing, Databases, System Integration, Microservices, Machine
                Learning(AI)
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderLeft: "7px solid  rgb(1, 191, 113)",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Game Design - Masters
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                IT University of Copenhagen
              </h4>
              <p>Masters</p>
              <p>
                Game Design, Game Programming, User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </QualificationItem>

        <QualificationItem>
          <h2 style={{ textDecoration: "underline" }}>Expirence</h2>
          <VerticalTimeline
            className={"test"}
            style={{ maxWidth: "200px" }}
            layout="1-column-left"
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(1, 191, 113)",
              }}
              date="22. Jan - 06. Apr 2018"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Internship</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bolvërk Games, Copenhagen
              </h4>
              <p>Worked on a Prototype for a VR Game</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(1, 191, 113)",
              }}
              date="2018 - 2020"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">It Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Immeo P/S, Copenhagen
              </h4>
              <p>Student Job</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(1, 191, 113)",
              }}
              date="26. Aug - 01. Nov 2019"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Internship</h3>
              <h4 className="vertical-timeline-element-subtitle">
                TeesuVac, Copenhagen
              </h4>
              <p>Created React app for handling internal tests and files</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(1, 191, 113)",
              }}
              date="2020 Feb - 2020 Aug"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Consultant</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Immeo P/S, Copenhagen
              </h4>
              <p>Full Time - Backend and Frontend development</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid  rgb(1, 191, 113)",
              }}
              date="2022 Aug - Present"
              iconStyle={{ background: "#010606", color: "rgb(1, 191, 113)" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">Mobile Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dalux ApS, Copenhagen
              </h4>
              <p>Full Time - Xamarin Mobile development and Backend</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </QualificationItem>
      </QualificationsWrapper>
    </QualificationsContainer>
  );
};

export default Qualifications;
