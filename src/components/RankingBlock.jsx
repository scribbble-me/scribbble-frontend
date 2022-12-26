import styled from "styled-components";
import RankingLikeNumber from "./RankingLikeNumber";
import RankingUserName from "./RankingUserName";
import RankingNumber from "./RankingNumber";
import { BsFillSuitHeartFill } from "react-icons/bs";

const StyledDiv = styled.div`
  width: 100%;
  background-color: #1a1a2a;
  display: flex;
  padding: 3px;
  /* border: 1px solid red; */
  /* border-bottom: 1px solid gray; */
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeartDiv = styled.div`
  align-items: center;
`;

function RankingBlock({ rankingnumber, rankingusername, rankinglikenumber }) {
  return (
    <StyledDiv>
      <RankingNumber rankingnumber={rankingnumber} />

      <FlexColumn>
        <RankingUserName rankingusername={rankingusername} />
        <FlexRow>
          <HeartDiv>
            <BsFillSuitHeartFill size={"15px"} color={"red"} />
          </HeartDiv>
          {console.log("rankingnumber is ", rankinglikenumber)}
          <RankingLikeNumber rankinglikenumber={rankinglikenumber} />
        </FlexRow>
      </FlexColumn>
    </StyledDiv>
  );
}

export default RankingBlock;
