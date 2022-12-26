import blackboard from "../heart.jpg";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 7.1825rem;
  width: 8.5rem;
  margin: 1.5rem 0px;
  align-self: center;
`;

function BlackboardImg(onClick) {
  return <StyledImg src={blackboard} onClick={onClick} />;
}

export default BlackboardImg;
