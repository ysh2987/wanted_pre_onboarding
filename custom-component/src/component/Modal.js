import React, { useState } from "react";
import styled from "styled-components";
import Container from "../utills/Container";
import Title from "../utills/Title";
import Content from "../utills/Content";

function Modal() {
  const [modal, setModal] = useState(false);
  const modalClick = () => {
    setModal(!modal);
  };
  return (
    <Container>
      <Title text="Modal" />
      <Content>
        <StyledModalBtn onClick={modalClick}>Open Modal</StyledModalBtn>

        <StyledModal className={modal ? "active" : ""}>
          <div className="modal-content">
            <span className="modal-close" onClick={modalClick}>
              x
            </span>
            <p>HELLO CODESTATES!</p>
          </div>
        </StyledModal>
      </Content>
    </Container>
  );
}

export default Modal;

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  &.active {
    display: block;
  }
  .modal-content {
    width: 350px;
    height: 130px;
    padding: 10px 0;
    background-color: #fff;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    .modal-close {
      cursor: pointer;
    }
  }
  p {
    margin-top: 20px;
  }
  span {
    font-size: 20px;
  }
`;

const StyledModalBtn = styled.div`
  width: 120px;
  height: 40px;
  line-height: 36px;
  text-align: center;
  border-radius: 25px;
  margin: 0 auto;
  cursor: pointer;
  background-color: #000066;
  color: #fff;
`;
