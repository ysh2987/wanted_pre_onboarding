import React, { useState, useRef } from "react";
import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";
import Content from "../utills/Content";

function Tag() {
  const [items, setItem] = useState([{ id: 0, text: "oasdadasdne" }]);
  const nextId = useRef(1);
  const createItem = (e) => {
    if (e.key !== "Enter" || e.target.value.trim() === "") return;
    setItem([...items, { id: nextId.current, text: e.target.value }]);
    nextId.current += 1;
    e.target.value = "";
  };
  const removeItem = (id) => {
    setItem(items.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <Title text="Tag" />
      <Content>
        <StyledTagWrap>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.text}
                <span onClick={() => removeItem(item.id)}>X</span>
              </li>
            );
          })}
          <input
            onKeyUp={(e) => createItem(e)}
            type="text"
            placeholder="Press enter to add tags"
          />
        </StyledTagWrap>
      </Content>
    </Container>
  );
}

export default Tag;

const StyledTagWrap = styled.div`
  width: 80%;
  max-height: 105px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  li {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    background-color: #000066;
    color: #fff;
    margin: 0 5px 5px 0;
  }
  input {
    border: none;
    height: 40px;
    outline: none;
  }
  span {
    margin-left: 10px;
    background: #fff;
    color: black;
    border-radius: 50%;
    width: 25px;
    cursor: pointer;
  }
`;
