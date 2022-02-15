import React, { useState } from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesFilterContainer,
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
import { portfolio, tags } from "./Data";
import { PillButton } from "../ButtonElements";
import { Button } from "../ButtonElements";

function findUsedTags() {
  var usedTagsList = [];
  for (let index = 0; index < portfolio.length; index++) {
    const element = portfolio[index];
    if (element.tags !== null && element.tags.length !== 0) {
      for (let j = 0; j < element.tags.length; j++) {
        const tag = element.tags[j];
        if (usedTagsList.find((t) => t.id === tag)) continue;
        else usedTagsList.push(tags.find((t) => t.id === tag));
      }
    }
  }
  return usedTagsList;
}

function createModalItem(item) {
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

const usedTags = findUsedTags();

const Services = (props) => {
  const [currentFilter, setCurrentFilter] = React.useState(-1);
  const [fullPortfolio, setFullPortfolio] = React.useState(portfolio);
  const [filteredPortfolio, setFilteredPortfolio] =
    React.useState(fullPortfolio);
  console.log("currentTab", currentFilter);
  console.log("fullPortfolio", fullPortfolio);

  const handleFilter = (value) => {
    if (value === -1) {
      console.log("setting full portfolio");
      setFilteredPortfolio(fullPortfolio);
    } else {
      const result = fullPortfolio.filter((item) => item.tags.includes(value));
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

  const [hover, setHover] = useState(false);

  const onhover = () => {
    setHover(!hover);
  };

  return (
    <ServicesContainer id="portfolio">
      <ServicesH1>Portfolio</ServicesH1>
      <ServicesFilterContainer>
        <ServicesTagWrapper>
          {usedTags.map((tag, index) => (
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

      <ServicesWrapper>
        {filteredPortfolio.map((item, index) => (
          <ServicesCard className="serviceCard__item" key={index}>
            <ServicesIcon src={item.icon} />
            <ServicesH2>{item.title}</ServicesH2>
            <ServicesP>{item.description}</ServicesP>
            

            <ServicesTagWrapper>
              {usedTags.map((tag, index) =>
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
                onClick={() => props.openModal(createModalItem(item))}
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
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

/*
<ServicesTagPillWrap>
            <PillButton color="#1e78fa" hovercolor="#1554af">
              {"Bootstrap"}
            </PillButton>
          </ServicesTagPillWrap>
          <ServicesTagPillWrap>
            <PillButton color="#DA420F" hovercolor="#982e0a">
              {"ASP.Net Core"}
            </PillButton>
          </ServicesTagPillWrap>
          <ServicesTagPillWrap>
            <PillButton color="#1e78fa" hovercolor="#1554af">
              {"Unity"}
            </PillButton>
          </ServicesTagPillWrap>
          <ServicesTagPillWrap>
            <PillButton color="#1e78fa" hovercolor="#1554af">
              {"Javascript"}
            </PillButton>
          </ServicesTagPillWrap>
          <ServicesTagPillWrap>
            <PillButton color="#1e78fa" hovercolor="#1554af">
              {"CSS"}
            </PillButton>
          </ServicesTagPillWrap>
          <ServicesTagPillWrap>
            <PillButton color="#1e78fa" hovercolor="#1554af">
              {"Electron"}
            </PillButton>
          </ServicesTagPillWrap>
          <ServicesTagPillWrap>
            <PillButton color="#1e78fa" hovercolor="#1554af">
              {"C#"}
            </PillButton>
          </ServicesTagPillWrap>


<div class="grid">
  <a href="#" class="grid__item" tabindex="1">1</a>
  <div class="grid__description"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores quos laudantium harum ea minus magnam hic ut tempore. Ipsam doloribus perferendis architecto magnam, exercitationem blanditiis corrupti totam ut praesentium</div></div>
  <a href="#" class="grid__item" tabindex="2">2</a>
  <div class="grid__description"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores deserunt alias a earum, expedita ipsam ea tempora voluptatibus. Debitis modi tempore, totam doloribus sapiente qui quaerat eum fugit magni!</div></div>
  <a href="#" class="grid__item" tabindex="3">3</a>
  <div class="grid__description"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magni similique esse, ipsum sapiente voluptate nihil nisi omnis nulla non consequatur veritatis voluptas sit cum sequi eaque, architecto, mollitia dolore.</div></div>
</div>
<div class="grid">
  <a href="#" class="grid__item" tabindex="4">4</a>
  <div class="grid__description"><div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, dolorem! Esse earum quis neque soluta, id fugiat magni consequatur placeat praesentium illum a sit ex dolore nisi ipsa similique deserunt!</div></div>
  <a href="#" class="grid__item" tabindex="5">5</a>
  <div class="grid__description"><div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, nulla voluptatibus eos quia sequi totam reprehenderit in cupiditate deserunt facere temporibus libero ut doloremque reiciendis ab commodi quibusdam consequatur corporis?</div></div>
  <a href="#" class="grid__item" tabindex="6">6</a>
  <div class="grid__description"><div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laborum atque numquam distinctio illum deleniti architecto voluptas modi, repellat non! Itaque numquam architecto pariatur impedit, tempora ab eius sint incidunt.</div></div>
</div>




* {
  box-sizing: border-box;
}

.grid__item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aaa;
  min-height: 150px;
  font-size: 5em;
  color: inherit;
  text-decoration: none;
  background: #ddd;
  
  &:focus + .grid__description {
    max-height: 200px;
    transition: max-height 0.4s ease-in;
  }
}

.grid__description {
  max-height: 0;
  overflow: hidden;
  background: #aaa;
  transition: max-height 0.15s ease-in;
  
  div {
    padding: 2em;
    box-shadow: inset 0 0 2px #000;
  }
}

@media screen and (min-width: 30em) {
  .grid {
    display: grid;
    grid-template-areas:
      "item item item"
      "desc desc desc";
    grid-template-columns: 1fr 1fr 1fr;
  }

  .grid__description {
    grid-area: desc;
  }
}


/*$(function() {
  function activateDesc($desc) {
    $desc.addClass('active');
  }

  $('.item').on('click', function(e) {
    e.preventDefault();

    var $link = $(this);
    var $desc = $link.next('.desc');
    var $activeDesc = $('.desc.active');
    
    if ($desc.hasClass('active')) {
      return;
    }
    
    if ($activeDesc.length < 1) {
      activateDesc($desc);
      return;
    }
    
    $activeDesc.removeClass('active').one('transitionend', function() {
      activateDesc($desc);
    });
  });
});*/

/*



<ServicesCard
          className="serviceCard__item"
          onClick={() => handleOnClick(1)}
        >
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We Help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesPanel
          className="servicePanel__item"
          open={open === 1 ? true : false}
        >
          <p>hello</p>
        </ServicesPanel>
        <ServicesCard
          className="serviceCard__item"
          onClick={() => handleOnClick(2)}
        >
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesPanel
          className="servicePanel__item"
          open={open === 2 ? true : false}
        >
          <p>hello</p>
        </ServicesPanel>
        <ServicesCard
          className="serviceCard__item"
          onClick={() => handleOnClick(3)}
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
        <ServicesPanel
          className="servicePanel__item"
          open={open === 3 ? true : false}
        >
          <p>hello</p>
        </ServicesPanel>
        <ServicesCard
          className="serviceCard__item"
          onClick={() => handleOnClick(4)}
        >
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
        <ServicesPanel
          className="servicePanel__item"
          open={open === 4 ? true : false}
          style={{ gridRowStart: "4", gridRowEnd: "4" }}
        >
          <p>hello</p>
        </ServicesPanel>


        */

/*

<div>
        <h2>Vertical Tabs</h2>
        <p>Click on the buttons inside the tabbed menu:</p>
        <ServicesTab>
          {data.map((button, i) => (
            <ServicesTabButton
              key={button.name}
              className="tablinks"
              onClick={() => setCurrentTab(i)}
            >
              {button.name}
            </ServicesTabButton>
          ))}

          <ServicesTabButton key={1}>"Test"</ServicesTabButton>
        </ServicesTab>
        <ServicesTabContent>
          {currentTab !== -1 && (
            <React.Fragment>
              <h3>{data[currentTab].name}</h3>
              <p>{data[currentTab].info}</p>
            </React.Fragment>
          )}
        </ServicesTabContent>
      </div>
        */
