import styled from "styled-components";
import Button from "./Button";
import { Routes, Route, Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledLink = styled(Link)`
  width: 100%;
`;

function ButtonFooter({ preb, prebtext, next, nexttext }) {
  return (
    <>
      <StyledDiv>
        <StyledLink to={preb}>
          <Button buttonName={prebtext} />
        </StyledLink>
        <StyledLink to={next}>
          <Button buttonName={nexttext} />
        </StyledLink>
      </StyledDiv>
    </>
  );
}

export default ButtonFooter;
