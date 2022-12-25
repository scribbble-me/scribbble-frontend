import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 100%;
  border-radius: 15px;
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.background || "#262538"};
`;

function Button({ buttonName, bgcolor, textcolor, onClick }) {
  return (
    <StyledButton onClick={onClick} background={bgcolor} color={textcolor}>
      {buttonName}
    </StyledButton>
  );
}

export default Button;
