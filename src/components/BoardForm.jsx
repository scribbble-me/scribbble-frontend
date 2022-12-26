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

import { Routes, Route, Link } from "react-router-dom";

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

const numberoflike = "15";
const schoolname = "동수초등학교";
const ranking = "32";

function BoardForm() {
  const [username, setUserName] = useState("default");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rankingshow, setRankingshow] = useState(false);
  const [url, setUrl] = useState("");
  const [userdata, setUserData] = useState(null);

  const tempid = "22e8726c-e82a-4c26-a4ca-45ee757459f0";

  const formalurl = "https://api.scribbble.me/api/members/";

  const membermeurl = "https://api.scribbble.me/api/members/me";

  const targeturl = formalurl + tempid;

  const targeturlheart = targeturl + "/hearts";

  // useEffect(() => {
  //   setUrl(window.location.href);
  //   axios
  //     .get(targeturl, { params: { memberId: tempid } })
  //     .then(function (response) {
  //       console.log(response);
  //       console.log(response.data);
  //       setUserData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       // alert(error.response.data.message);
  //     });
  // }, []);

  useEffect(() => {
    setUrl(window.location.href);
    // axios
    //   .get(targeturl, { params: { memberId: tempid } })
    //   .then(function (response) {
    //     console.log(response);
    //     console.log(response.data);
    //     setUserData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     // alert(error.response.data.message);
    //   });
    axios
      .get(membermeurl, { withCredentials: true })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
        // alert(error.response.data.message);
      });
  }, []);

  const copy = async () => {
    // console.log(window.location.pathname);
    // console.log(window.location.href);
    await navigator.clipboard.writeText(url);
    alert("주소가 클립보드에 복사되었습니다");
  };

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      <BackgroundImg>
        <ColumnFlexdiv>
          {" "}
          <Div100>
            <RowFlexdiv>
              <GeneralText
                // innertext={userdata.username + "님의 좋아요"}
                innertext={username + "님의 좋아요"}
                // fontsize={"1.625rem"}
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
              innertext={numberoflike + "개의 좋아요를 받았어요"}
              fontsize={"0.8rem"}
            />
            <GeneralText
              // innertext={"(" + userdata.school.name + "에서 " + ranking + "등)"}
              innertext={"(" + schoolname + "에서 " + ranking + "등)"}
              owntext={15}
              fontsize={"0.8rem"}
            />
          </Div100>
          <HeartAnimationed />
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
