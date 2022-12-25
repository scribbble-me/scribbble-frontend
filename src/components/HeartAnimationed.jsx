import blackboard from "../heart.jpg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const StyledImg = styled.img`
  height: 7.1825rem;
  width: 8.5rem;
  margin: 1.5rem 0px;
  align-self: center;
`;

function HeartAnimationed() {
  return <StyledImg src={blackboard} />;
}

export default HeartAnimationed;
