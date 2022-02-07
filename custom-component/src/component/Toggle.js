import React, { useState } from "react";
import styled from "styled-components";
import Title from "../utills/Title";
import Container from "../utills/Container";
import Content from "../utills/Content";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const toggleClick = (e) => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Title text="Toggle" />
      <Content>
        <StyledToggleWrap>
          <div
            className={"toggle-wrap " + (toggle ? "active" : "")}
            onClick={toggleClick}
          >
            <div className="toggle-btn" />
          </div>
        </StyledToggleWrap>
        <span>Toggle Switch {toggle ? "ON" : "OFF"}</span>
      </Content>
    </Container>
  );
}

export default Toggle;

const StyledToggleWrap = styled.div`
  .toggle-wrap {
    width: 60px;
    border-radius: 15px;
    background-color: gray;
    padding: 5px;
    cursor: pointer;

    &.active {
      background-color: #000066;
      transition: background-color 0.3s;
    }
  }
  .active .toggle-btn {
    transform: translateX(40px);
    transition-duration: 0.3s;
  }
  .toggle-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    transform: translateX(0px);
    transition-duration: 0.3s;
  }
`;
