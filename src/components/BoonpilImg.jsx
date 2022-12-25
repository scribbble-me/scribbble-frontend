import styled from "styled-components";
import blackboard from "../blackboard.jpg";

const StyledImg = styled.img`
  width: 30%;
  font-size: 30px;
  display: block;
`;

function BoonpilImg() {
  return (
    <>
      <StyledImg src={blackboard} />
    </>
  );
}

export default BoonpilImg;
