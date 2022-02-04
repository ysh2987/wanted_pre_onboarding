import React, { useState } from "react";
import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";
import Content from "../utills/Content";

function Tag() {
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
      <Title text="Tag" />
      <Content>
        <StyledTagWrap>
          <div>jjang</div>
          <input type="text" placeholder="Press enter to add tags" />
        </StyledTagWrap>
      </Content>
    </Container>
  );
}

export default Tag;

const StyledTagWrap = styled.div`
  width: 400px;
  display: flex;
  text-align: center;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  margin: 0 auto;
  div {
    height: 40px;
    line-height: 36px;
    padding: 5px;
    border-radius: 5px;
    background-color: #000066;
    color: #fff;
  }
  input {
    border: none;
  }
`;
