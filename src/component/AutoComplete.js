import React, { useState } from "react";
// import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";
import Content from "../utills/Content";

function AutoComplete() {
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
      <Title text="AutoComplete" />
      <Content>
        <div>오토</div>
      </Content>
    </Container>
  );
}

export default AutoComplete;

// const StyledTabWrap = styled.div`
//   ul {
//     display: flex;
//     background-color: gray;
//     align-items: center;
//   }

//   li {
//     width: 33.3%;
//     height: 50px;
//     text-align: center;
//     line-height: 50px;
//     list-style-type: none;
//     &.active {
//       background-color: purple;
//     }
//   }
//   p {
//     text-align: center;
//   }
// `;
