import Textbox from "./Textbox";
import ChilpanText from "./ChilpanText";
import Button from "./Button";
import RecoveryPassword from "./RecoveryPassword";
import HeartAnimationed from "./HeartAnimationed";

import GeneralText from "./GeneralText";
import CircleButton from "./CircleButton";
import RankingCurtain from "./RankingCurtain";
import BackgroundImg from "./BackgroundImg";
import styled from "styled-components";
import { CgTrophy, CgMenu } from "react-icons/cg";
import StyledLink from "./StyledLink";
import axios from "axios";

import { ReactComponent as Ranking } from "../trophy-svgrepo-com (1).svg";
import { ReactComponent as Menu } from "../menu-svgrepo-com.svg";

import { Routes, Route, Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const RowFlexdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const RowFlexEndDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ColumnFlexdiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: Column;
`;

const Div100 = styled.div`
  width: 100%;
`;

const Div100center = styled.div`
  width: 100%;
  text-align: center;
`;

const numberoflike = "15";
const schoolname = "동수초등학교";
const ranking = "32";

function BoardForm() {
  let { userId } = useParams();

  const [url, setUrl] = useState("");
  const [userdata, setUserData] = useState({
    id: "",
    school: { id: -1, name: "" },
    username: "",
  });
  const [heartcount, setHeartCount] = useState(0);
  const [userranking, setUserRanking] = useState(-1);

  // const tempid2 = "2ea3cb70-2490-4c2f-a037-6841f7b52374";
  // const tempid = "401505a1-ad19-40ac-bbed-60ed3da4e67f";

  const formalurl = "https://api.scribbble.me/api/members/";

  const membermeurl = `https://api.scribbble.me/api/members/${userId}`;

  const myrankingurl = `https://api.scribbble.me/api/ranking/members/${userId}`;

  useEffect(() => {
    setUrl(window.location.href);
    axios // 초기 유저 정보 가져오기
      .get(membermeurl, { withCredentials: true }) //member/me
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {}, []);
  }, []);

  useEffect(fetchRanking, [userdata]);

  useEffect(fetchHeartCount, [userdata]);

  function handleHeartClick() {
    const targeturl = formalurl + userdata.id + "/hearts";

    axios
      .post(targeturl, { withCredentials: true })
      .then(function () {
        fetchRanking();
        fetchHeartCount();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function fetchRanking() {
    axios // 유저 등수 가져오기
      .get(myrankingurl, { withCredentials: true })
      .then(function (response) {
        const { ranking } = response.data;
        setUserRanking(ranking);
      })
      .catch(function (error) {});
  }

  function fetchHeartCount() {
    const getheartcounturl = `https://api.scribbble.me/api/members/${userdata.id}/hearts`;
    axios // 하트 수 가져오기
      .get(getheartcounturl, { withCredentials: true })
      .then(function (response) {
        const { count } = response.data;
        setHeartCount(count);
      })
      .catch(function (error) {});
  }

  const copy = async () => {
    // console.log(window.location.pathname);
    // console.log(window.location.href);
    await navigator.clipboard.writeText(url);
    alert("주소가 클립보드에 복사되었습니다");
  };

  let { params } = useParams();

  console.log("adsf", params);

  return (
    <>
      <BackgroundImg>
        <ColumnFlexdiv>
          {" "}
          <Div100>
            <RowFlexdiv>
              <GeneralText
                innertext={userdata.username + "님의 좋아요"}
                fontsize={"1.625rem"}
              />
              <RowFlexEndDiv>
                <StyledLink to="/ranking">
                  <CgTrophy size="32" color="white" />
                </StyledLink>

                {/* <CgMenu size="32" color="white" /> */}
              </RowFlexEndDiv>
            </RowFlexdiv>
            <GeneralText
              innertext={heartcount + "개의 좋아요를 받았어요"}
              fontsize={"0.8rem"}
            />
            <GeneralText
              // innertext={"(" + userdata.school.name + "에서 " + ranking + "등)"}
              innertext={
                "(" + userdata.school.name + "에서 " + userranking + "등)"
              }
              owntext={15}
              fontsize={"0.8rem"}
            />
          </Div100>
          <Div100center onClick={handleHeartClick}>
            <HeartAnimationed />
          </Div100center>
          <StyledLink to="/signup">
            <Button
              buttonName="나도 하트 만들기"
              bgcolor="yellow"
              textcolor="black"
            />
          </StyledLink>
          <Button
            buttonName="내 주소 복사하기"
            bgcolor="orange"
            textcolor="black"
            onClick={copy}
          />
          {/* {rankingshow == true ? (
            <>
              <RankingCurtain />
              <Button
                buttonName="칠판으로 돌아가기"
                onClick={() => {
                  setRankingshow(false);
                }}
              />
            </>
          ) : null} */}
        </ColumnFlexdiv>
      </BackgroundImg>
    </>
  );
}

export default BoardForm;
