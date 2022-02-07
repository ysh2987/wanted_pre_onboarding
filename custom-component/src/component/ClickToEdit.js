import React, { useState } from "react";
import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";
import Content from "../utills/Content";

function ClickToEdit() {
  const [text, setText] = useState({
    name: "최해커",
    age: "20",
  });
  const { name, age } = text;
  const changeValue = (e) => {
    const { value, name } = e.target;
    setText({ ...text, [name]: value });
  };

  return (
    <Container>
      <Title text="ClickToEdit" />
      <Content>
        <StyledFelxWrap>
          <label>이름</label>
          <input
            name="name"
            onBlur={(e) => changeValue(e)}
            type="text"
            defaultValue={name}
          />
        </StyledFelxWrap>
        <StyledFelxWrap>
          <label>나이</label>
          <input
            name="age"
            onBlur={(e) => changeValue(e)}
            type="text"
            defaultValue={age}
          />
        </StyledFelxWrap>
        <p>
          이름 {name} 나이 {age}
        </p>
      </Content>
    </Container>
  );
}

export default ClickToEdit;

const StyledFelxWrap = styled.div`
  display: flex;
  margin-top: 20px;
  label {
    margin-right: 20px;
  }
`;
