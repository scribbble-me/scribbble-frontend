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

import { useState } from "react";

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

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    // <BackgroundImg>
    // <ChilpanText />
    // <BlackboardImg />
    // <Div100>
    //   <InputText innertext="이메s일 주소" />
    //   <Textbox onChange={handleEmailChange} />
    // </Div100>

    // <Div100>
    //   <InputText innertext="비밀번호" />
    //   <Textbox onChange={handlePasswordChange} />
    // </Div100>

    // <Button buttonName="로그인" bgcolor="#262538" textcolor="white" />

    // <StyledLink to="/signup">
    //   <Button buttonName="회원가입하기" bgcolor="#262538" textcolor="white" />
    // </StyledLink>
    // </BackgroundImg>

    <BackgroundImg>
      <StyledMain>
        <ChilpanText />
        <BlackboardImg />
        <Div100>
          <InputText innertext="이메일 주소" />
          <Textbox onChange={handleEmailChange} />
        </Div100>

        <Div100>
          <InputText innertext="비밀번호" />
          <Textbox onChange={handlePasswordChange} />
        </Div100>

        <Button buttonName="로그인" bgcolor="#262538" textcolor="white" />

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
