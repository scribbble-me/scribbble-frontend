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
import axios from "axios";

import RankingNumber from "./RankingNumber";

import { useEffect, useState } from "react";

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
  const [userHeartCount, setUserHeartCount] = useState({});
  console.log({ userHeartCount });

  const schoolId = 2066;
  const [rankinglist, setRankingList] = useState([]);
  const [schoolname, setSchoolName] = useState("");
  // const [rankinglistmore, setRankingListMore] = useState([]);

  const rankingurl =
    "https://api.scribbble.me/api/ranking/schools" + "/" + schoolId;

  useEffect(() => {
    axios
      // .post("http://139.162.114.119:8080/api/auth", { email, password })
      .get(rankingurl, {
        schoolId,
      })
      .then(function (response) {
        // console.log(response);
        // console.log("TEST", response.data);
        setRankingList(response.data);
        setSchoolName(rankinglist.school.name);
      })
      .catch(function (error) {
        console.log(error);
        // alert(error.response.data.message);
      });
  }, []);

  useEffect(() => {
    if (rankinglist !== null && rankinglist.length > 0) {
      const promises = rankinglist.map((user) => {
        const getheartcounturl = `https://api.scribbble.me/api/members/${user.id}/hearts`;
        return axios.get(getheartcounturl, { withCredentials: true });
      });

      Promise.all(promises).then((respones) => {
        const heartCounts = {};
        respones.forEach((response) => {
          const { count, memberId } = response.data;
          heartCounts[memberId] = count;
        });

        setUserHeartCount(heartCounts);
      });
    }
  }, [rankinglist]);

  return (
    <BackgroundImg>
      <StyledMain>
        <TitleText>{"Top 랭킹"}</TitleText>
        {/* <TitleText>{schoolname + "Top 랭킹"}</TitleText> */}

        {rankinglist.map((eachuser, index) => {
          console.warn(userHeartCount[eachuser.id]);

          return (
            <RankingBlock // 뭔소린지 모르갯다 ㅋㅋ 물속에 있는거 같음 ㅋㅋ1
              rankingnumber={index + 1}
              rankingusername={eachuser.username}
              rankinglikenumber={userHeartCount[eachuser.id]}
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
