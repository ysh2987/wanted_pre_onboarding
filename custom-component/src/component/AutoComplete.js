import React from "react";
import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";
import Content from "../utills/Content";

function AutoComplete() {
  return (
    <Container>
      <Title text="AutoComplete" />
      <Content>
        <StyledInput type="text" list="options" />
        <datalist id="options">
          <option value="antique" />
          <option value="vintage" />
          <option value="중고A급" />
          <option value="refurbished" />
          <option value="rustic" />
        </datalist>
      </Content>
    </Container>
  );
}

export default AutoComplete;

const StyledInput = styled.input`
  width: 80%;
  padding: 5px;
`;
