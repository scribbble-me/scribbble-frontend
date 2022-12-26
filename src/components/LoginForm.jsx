import styled from "styled-components";
import Textbox from "./Textbox";
import ChilpanText from "./ChilpanText";
import Button from "./Button";
import RecoveryPassword from "./RecoveryPassword";
import BlackboardImg from "./BlackboardImg";
// import BackgroundImg from "./BackgroundImg";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import InputText from "./InputText";
import BackgroundImg from "./BackgroundImg";
import StyledLink from "./StyledLink";
import axios from "axios";

import { useEffect, useState } from "react";

const Div100 = styled.div`
  width: 100%;
`;

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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userid, setUserId] = useState("");

  const navigate = useNavigate();

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  function handleEmailChange(e) {
    setEmail(e.target.value);
    // console.log(email);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function logincheck(callback) {
    axios
      .get("https://api.scribbble.me/api/members/me", { withCredentials: true })
      .then(function (response) {
        console.log("userid is", response.data.id);
        callback(`/heart/${response.data.id}`);
      })
      .catch(function (error) {
        // console.log(error);
        alert(error.response.data.message);
      });
  }

  function handleLogin() {
    axios
      // .post("http://139.162.114.119:8080/api/auth", { email, password })
      .post(
        "https://api.scribbble.me/api/auth",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        logincheck(navigate);
      })
      .catch(function (error) {
        // console.log(error);
        alert(error.response.data.message);
      });
  }

  return (
    <BackgroundImg>
      <StyledMain>
        <ChilpanText />
        <BlackboardImg />
        <Div100>
          <InputText innertext="이메일 주소" />
          <Textbox onChange={handleEmailChange} onKeyPress={handleOnKeyPress} />
        </Div100>

        <Div100>
          <InputText innertext="비밀번호" />
          <Textbox
            onChange={handlePasswordChange}
            type="password"
            onKeyPress={handleOnKeyPress}
          />
        </Div100>

        <Button
          buttonName="로그인"
          bgcolor="#262538"
          textcolor="white"
          onClick={handleLogin}
        />

        <StyledLink to="/signup">
          <Button
            buttonName="회원가입하기"
            bgcolor="#262538"
            textcolor="white"
          />
        </StyledLink>
      </StyledMain>
    </BackgroundImg>
  );
}

export default LoginForm;
