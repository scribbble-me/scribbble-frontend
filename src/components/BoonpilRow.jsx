import styled from "styled-components";
import Boonpil from "./BoonpilImg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function BoonpilRow() {
  return (
    <StyledDiv>
      <Boonpil />
      <Boonpil />
      <Boonpil />
    </StyledDiv>
  );
}

export default BoonpilRow;
