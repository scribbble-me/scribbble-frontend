import styled from "styled-components";
import Textbox from "./Textbox";
import ChilpanText from "./ChilpanText";
import Button from "./Button";
import SchoolNameList from "./SchoolNameList";
import BackgroundImg from "./BackgroundImg";
import InputText from "./InputText";
import axios from "axios";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import StyledLink from "./StyledLink";

import { useState, useEffect } from "react";
import GeneralText from "./GeneralText";

const schoolData123 = [
  {
    id: 1,
    name: "21",
  },
  {
    id: 2,
    name: "22",
  },
  {
    id: 3,
    name: "34",
  },
  {
    id: 4,
    name: "54",
  },
  {
    id: 5,
    name: "555",
  },
];

const schoolData1223 = [];

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [schoolname, setSchoolname] = useState("");
  const [selectedschoolname, setSelectedSchoolname] = useState(-1);
  const [serverschoolnamelist, setServerSchoolNameList] = useState([]);
  const [schoolId, setSchoolId] = useState(-1);

  const navigate = useNavigate();

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
  function handleServerSchoolNameList() {}

  useEffect(() => {
    console.log(schoolname);
    console.log("asdf");
    axios
      .get("https://api.scribbble.me/api/schools", {
        params: { query: schoolname },
      })
      .then(function (response) {
        // console.log(response);

        console.log("TEST", response.data);
        setServerSchoolNameList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [schoolname]);

  useEffect(() => {
    console.log("ServerSchoolNameList", serverschoolnamelist);
  }, [serverschoolnamelist]);

  function handleMaking() {
    axios

      .post("https://api.scribbble.me/api/members", {
        email,
        password,
        schoolId: selectedschoolname,
        username,
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        navigate(`/`);
      })
      .catch(function (error) {
        console.log(error);
        alert(error.response.data.message);
      });
  }

  return (
    <BackgroundImg>
      <ChilpanText />
      <div>
        <InputText innertext="????????? ??????" />
        <Textbox placeholder="" onChange={handleEmailChange} />
        <InputText innertext="????????????" />
        <Textbox
          placeholder=""
          type="password"
          onChange={handlePasswordChange}
        />
        <InputText innertext="?????????" />
        <Textbox placeholder="" onChange={handleUsername} />
        <InputText innertext="????????????" />
        <Textbox placeholder="" onChange={handleSchoolname} />
        {!schoolname && <SchoolNameList schoolname={null} />}
        {schoolname && (
          <SchoolNameList
            schoolname={schoolname}
            setSelectedSchoolname={setSelectedSchoolname}
            serverschoolnamelist={serverschoolnamelist}
          />
        )}
      </div>

      <Button buttonName="?????? ?????????" onClick={handleMaking} />
    </BackgroundImg>
  );
}

export default SignupForm;
