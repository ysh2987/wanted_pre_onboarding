import React from "react";
import styled from "styled-components";

function Title({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

export default Title;

const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
