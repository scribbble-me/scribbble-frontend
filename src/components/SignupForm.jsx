import styled from "styled-components";
import Textbox from "./Textbox";
import ChilpanText from "./ChilpanText";
import Button from "./Button";
import SchoolNameList from "./SchoolNameList";
import BackgroundImg from "./BackgroundImg";
import InputText from "./InputText";

import { Routes, Route, Link } from "react-router-dom";
import StyledLink from "./StyledLink";

import { useState, useEffect } from "react";
import GeneralText from "./GeneralText";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [schoolname, setSchoolname] = useState(null);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handleSchoolname(e) {
    setSchoolname(e.target.value);
  }

  // useEffect(() => {
  //   console.log(schoolname);
  // }, [schoolname]);

  return (
    <BackgroundImg>
      <ChilpanText />
      <div>
        <InputText innertext="이메일 주소" />
        <Textbox placeholder="" onChange={handleEmailChange} />
        <InputText innertext="비밀번호" />
        <Textbox placeholder="" onChange={handlePasswordChange} />
        <InputText innertext="닉네임" />
        <Textbox placeholder="" onChange={handleUsername} />
        <InputText innertext="학교검색" />
        <Textbox placeholder="" onChange={handleSchoolname} />
        {!schoolname && <SchoolNameList schoolname={null} />}
        {console.log("asdf", !schoolname)}
        {schoolname && <SchoolNameList schoolname={schoolname} />}
      </div>

      <StyledLink to="/board">
        <Button buttonName="칠판 만들기" />
      </StyledLink>
    </BackgroundImg>
  );
}

export default SignupForm;
