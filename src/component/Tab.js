import React, { useState } from "react";
import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";

function Tab() {
  const [active, setActive] = useState(0);
  const activeClick = (index) => {
    setActive(index);
  };
  const tabList = [
    { id: 0, title: "Tab1", text: "one" },
    { id: 1, title: "Tab2", text: "Two" },
    { id: 2, title: "Tab3", text: "Three" },
  ];
  return (
    <Container>
      <Title text="Tab" />
      <StyledTabWrap>
        <ul>
          {tabList.map((item, index) => {
            return (
              <li
                className={index === active ? "active" : ""}
                key={item.id}
                onClick={() => activeClick(index)}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <p>Tab Menu {tabList[active].text}</p>
      </StyledTabWrap>
    </Container>
  );
}

export default Tab;

const StyledTabWrap = styled.div`
  ul {
    display: flex;
    background-color: gray;
    align-items: center;
  }

  li {
    width: 33.3%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    list-style-type: none;
    color: #fff;
    cursor: pointer;
    &.active {
      background-color: #000066;
    }
  }
  p {
    text-align: center;
  }
`;
