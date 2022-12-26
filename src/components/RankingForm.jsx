import styled from "styled-components";
import Textbox from "./Textbox";
import ChilpanText from "./ChilpanText";
import Button from "./Button";
import RecoveryPassword from "./RecoveryPassword";
import BlackboardImg from "./BlackboardImg";
// import BackgroundImg from "./BackgroundImg";
import { Routes, Route, Link } from "react-router-dom";
import InputText from "./InputText";
import BackgroundImg from "./BackgroundImg";
import StyledLink from "./StyledLink";
import RankingBlock from "./RankingBlock";

import RankingNumber from "./RankingNumber";

import { useState } from "react";

const rankingdata = [
  {
    id: 1,
    rank: 1,
    name: "이몽룡",
    likenumber: 1213,
  },
  {
    id: 2,
    rank: 2,
    name: "성춘향",
    likenumber: 1113,
  },
  {
    id: 3,
    rank: 3,
    name: "망나니",
    likenumber: 903,
  },
  {
    id: 4,
    rank: 4,
    name: "변사또",
    likenumber: 270,
  },
  {
    id: 5,
    rank: 5,
    name: "개똥이",
    likenumber: 121,
  },
  {
    id: 6,
    rank: 6,
    name: "방자",
    likenumber: 121,
  },
];

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  height: 100%;
`;

const TitleText = styled.text`
  width: 100%;
  font-size: 30px;
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
`;

function RankingForm() {
  return (
    <BackgroundImg>
      <StyledMain>
        <TitleText>Top 랭킹</TitleText>

        {rankingdata.map((eachuser) => {
          return (
            <RankingBlock
              rankingnumber={eachuser.rank}
              rankingusername={eachuser.name}
              rankinglikenumber={eachuser.likenumber}
            />
          );
        })}
        <StyledLink to="/board">
          <Button
            buttonName="내 하트 보러가기"
            bgcolor="yellow"
            textcolor="black"
          />
        </StyledLink>
      </StyledMain>
    </BackgroundImg>
  );
}

export default RankingForm;
