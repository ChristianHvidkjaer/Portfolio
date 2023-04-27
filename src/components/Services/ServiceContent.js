import React, { useState } from "react";
import {
  ServicesWrapperHighlighted,
  ServicesH2,
  ServicesTagWrapper,
  ServicesTestContainer,
  ServicesFilterContainer,
  ServicesWrapper
} from "./ServicesElements";
import ServiceCardElement from "./ServiceCardElement";
import { PillButton } from "../ButtonElements";

function validTag(id, tag) {
    if(id === 0)
    {
        return tag.gameTag;
    }
    else if (id === 1)
    {
        return tag.softwareTag
    }
    return true;
}

const ServiceContent = (props) => {
    const [currentFilter, setCurrentFilter] = React.useState(-1);
    const [filteredPortfolio, setFilteredPortfolio] =
    React.useState(props.items);
    const [hover, setHover] = useState(false);

    const handleFilter = (value) => {
        if (value === -1) {
          console.log("setting full portfolio");
          setFilteredPortfolio(props.items);
        } else {
          const result = props.items.filter((item) => item.tags.includes(value));
          console.log("result", result);
          setFilteredPortfolio(result);
        }
      };

    const handleSetFilter = (id) => {
        var filterId = id;
        if (currentFilter === id) filterId = -1;
        setCurrentFilter(filterId);
        handleFilter(filterId);
      };
  
    const onhover = () => {
      setHover(!hover);
    };
  
    return (
        <ServicesTestContainer>
            {props.highlight ? (
                <ServicesH2>Highlighted Projects</ServicesH2>
            ) : null}
            {props.highlight ? (
                <ServicesWrapperHighlighted>
                    {props.items.map((item, index) => item.highlight ? (
                        <ServiceCardElement key={index} item={item} usedTags={props.usedTags} openModal={props.openModal}/>
                    ) : null)}
                </ServicesWrapperHighlighted>
            ) : null}
            
            <ServicesH2>{props.allText}</ServicesH2>
                <ServicesFilterContainer>
                    <ServicesTagWrapper>
                    {props.usedTags.map((tag, index) => validTag(props.id, tag) ? (
                        <PillButton
                        color={tag.color}
                        hovercolor={tag.colorSelected}
                        onClick={() => handleSetFilter(tag.id)}
                        key={index}
                        style={{
                            borderStyle: tag.id === currentFilter ? "solid" : "none",
                            borderWidth: tag.id === currentFilter ? "2px" : "0px",
                            background:
                            tag.id === currentFilter ? tag.colorSelected : tag.color,
                        }}
                        >
                        {tag.name}
                        </PillButton>
                    ) : null)}
                    </ServicesTagWrapper>
            </ServicesFilterContainer>

            <ServicesWrapper>
                {filteredPortfolio.map((item, index) => (
                     <ServiceCardElement key={index} item={item} usedTags={props.usedTags} openModal={props.openModal}/>
                
                ))}
            </ServicesWrapper>
        </ServicesTestContainer>
    );
};

export default ServiceContent;

/*
<ServicesCard className="serviceCard__item" key={index}>
                    <ServicesIcon src={item.icon} />
                    <ServicesH2>{item.title}</ServicesH2>
                    <ServicesP>{item.description}</ServicesP>
                    

                    <ServicesTagWrapper>
                    {props.usedTags.map((tag, index) =>
                        item.tags.includes(tag.id) ? (
                        <PillButton
                            color={tag.color}
                            hovercolor={tag.colorSelected}
                            key={index}
                            style={{
                            borderStyle: tag.id === currentFilter ? "solid" : "none",
                            borderWidth: tag.id === currentFilter ? "2px" : "0px",
                            background:
                                tag.id === currentFilter
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
                        onClick={() => props.openModal(createModalItem(item, props.usedTags))}
                    >
                        Learn More
                    </PortfolioButton>
                    </BtnWrap>
                    <ServicesSocialIcons>
                    {item.links.map((link, index) => (
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

*/


/*
<ServicesTestContainer>
            <ServicesH2>Highlighted Projects</ServicesH2>
                <ServicesWrapperHighlighted>
                {props.items.map((item, index) => (
                <ServicesCard className="serviceCard__item" key={index}>
                    <ServicesIcon src={item.icon} />
                    <ServicesH2>{item.title}</ServicesH2>
                    <ServicesP>{item.description}</ServicesP>
                    
                    <ServicesTagWrapper>
                    {props.usedTags.map((tag, index) =>
                        item.tags.includes(tag.id) ? (
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
                        onClick={() => props.openModal(createModalItem(item, props.usedTags))}
                    >
                        Learn More
                    </PortfolioButton>
                    </BtnWrap>
                    <ServicesSocialIcons>
                    {item.links.map((link, index) => (
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
                ))}
            </ServicesWrapperHighlighted>

            <ServicesH2>All Projects</ServicesH2>
                <ServicesFilterContainer>
                    <ServicesTagWrapper>
                    {props.usedTags.map((tag, index) => (
                        <PillButton
                        color={tag.color}
                        hovercolor={tag.colorSelected}
                        onClick={() => handleSetFilter(tag.id)}
                        key={index}
                        style={{
                            borderStyle: tag.id === currentFilter ? "solid" : "none",
                            borderWidth: tag.id === currentFilter ? "2px" : "0px",
                            background:
                            tag.id === currentFilter ? tag.colorSelected : tag.color,
                        }}
                        >
                        {tag.name}
                        </PillButton>
                    ))}
                    </ServicesTagWrapper>
            </ServicesFilterContainer>
        </ServicesTestContainer>


*/