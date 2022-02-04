import React from "react";
import styled from "styled-components";

function Content({ children }) {
  return <StyledContent>{children}</StyledContent>;
}

export default Content;

const StyledContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1 1;
`;
