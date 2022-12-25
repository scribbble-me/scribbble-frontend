import styled from "styled-components";

const StyledDiv = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

function RankingUserName({ rankingusername }) {
  return <StyledDiv>{rankingusername}</StyledDiv>;
}

export default RankingUserName;
