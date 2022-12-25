import styled from "styled-components";

const StyledDiv = styled.div`
  color: white;
  font-size: 15px;
`;

function RankingLikeNumber({ rankinglikenumber }) {
  return <StyledDiv>{rankinglikenumber}</StyledDiv>;
}

export default RankingLikeNumber;
