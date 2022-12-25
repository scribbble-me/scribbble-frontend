import styled from "styled-components";
import GeneralText from "./GeneralText";
import BoonpilRow from "./BoonpilRow";
import Button from "./Button";
import Message2 from "./Message2";
import ButtonFooter from "./ButtonFooter";
import { Routes, Route, Link } from "react-router-dom";

import blackboard from "../blackboard.jpg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const BackgroundDiv = styled.div`
  background-color: #222530;
`;

const TitleText = styled(GeneralText)`
  color: red;
`;

function Message1() {
  return (
    <>
      <BackgroundDiv>
        <TitleText innertext={"분필을 골라주세요"} />
        <BoonpilRow />
        <BoonpilRow />
        {/* <StyledDiv>
                <StyledLink to='/Board'>
                    <Button buttonName={"닫기"}/>
                </StyledLink>
                <StyledLink to='/Message2'>
                    <Button buttonName={"다음"}/>
                </StyledLink>
            </StyledDiv> */}
        <ButtonFooter
          preb="/board"
          prebtext="닫기"
          next="/message2"
          nexttext="다음"
        />
      </BackgroundDiv>
    </>
  );
}

export default Message1;
