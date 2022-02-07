import React from "react";
import styled from "styled-components";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

const StyledContainer = styled.section`
  width: 50%;
  height: 150px;
  border: 1px solid;
  margin-top: 50px;
  padding: 10px;
  flex-direction: column;
  display: flex;
`;
