import React, { useState } from "react";
import {
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesTagWrapper,
  ServicesSocialIcons,
  SerivesSocialIconLink,
  PortfolioButton,
  BtnWrap,
} from "./ServicesElements";
import { PillButton } from "../ButtonElements";

function createModalItem(item, usedTags) {
    var modalItem = { ...item };
    modalItem.tags = [];
    for (let index = 0; index < usedTags.length; index++) {
      const element = usedTags[index];
      if (item.tags.includes(element.id)) {
        modalItem.tags.push(element);
      }
    }
    return modalItem;
}

const ServiceCardElement = (props) => {
    const [hover, setHover] = useState(false);
  
    const onhover = () => {
      setHover(!hover);
    };
  
    return (
      <ServicesCard className="serviceCard__item">
          <ServicesIcon src={props.item.icon} />
          <ServicesH2>{props.item.title}</ServicesH2>
          <ServicesP>{props.item.description}</ServicesP>
          
          <ServicesTagWrapper>
          {props.usedTags.map((tag, index) =>
              props.item.tags.includes(tag.id) ? (
              <PillButton
                  color={tag.color}
                  hovercolor={tag.colorSelected}
                  key={index}
                  style={{
                  borderStyle: tag.id === props.currentFilter ? "solid" : "none",
                  borderWidth: tag.id === props.currentFilter ? "2px" : "0px",
                  background:
                      tag.id === props.currentFilter
                      ? tag.colorSelected
                      : tag.color,
                  }}
              >
                  {tag.name}
              </PillButton>
              ) : null
          )}
          </ServicesTagWrapper>
          <BtnWrap>
          <PortfolioButton
              primary={1}
              big={0}
              dark={1}
              dark2={1}
              onClick={() => props.openModal(createModalItem(props.item, props.usedTags))}
          >
              Learn More
          </PortfolioButton>
          </BtnWrap>
          <ServicesSocialIcons>
          {props.item.links.map((link, index) => (
              <SerivesSocialIconLink
              href={link.ref}
              target="_blank"
              aria-label={link.label}
              key={index}
              >
              {link.icon}
              </SerivesSocialIconLink>
          ))}
          </ServicesSocialIcons>
      </ServicesCard>
    );
};

export default ServiceCardElement;
