import React, { useState } from "react";
import { BiBracket } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import {
  SkillsCard,
  SkillsTitle,
  SkillsIcon,
  SkillsArrow,
  SkillsArrowUp,
  SkillsName,
  SkillsNameList,
} from "./SkillsElements";

const SkillsAccordionCard = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleOnClick = (event) => {
    console.log("clicked");
    setOpen(!open);
  };

  return (
    <SkillsCard style={{ maxHeight: open ? "400px" : "100px" }}>
      <div className="skills__header">
        <SkillsIcon />
        <SkillsTitle>{props.title}</SkillsTitle>
        {open ? (
          <SkillsArrow onClick={handleOnClick} />
        ) : (
          <SkillsArrowUp onClick={handleOnClick} />
        )}
      </div>
      <SkillsNameList open={open} style={{ display: open ? "block" : "none" }}>
        {props.skillsNameList.map((skillName, index) => (
          <SkillsName key={index}>{skillName}</SkillsName>
        ))}
      </SkillsNameList>
    </SkillsCard>
  );
};

export default SkillsAccordionCard;
