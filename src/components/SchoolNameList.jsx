import styled from "styled-components";
import SchoolName from "./SchoolName";
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import axios from "axios";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const schoolData = [
  {
    id: 1,
    name: "aaa",
  },
  {
    id: 2,
    name: "bbb",
  },
  {
    id: 3,
    name: "ccc",
  },
  {
    id: 4,
    name: "ddddd",
  },
  {
    id: 5,
    name: "ddsdfdddd",
  },
];

const schoolData0 = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
  },
  {
    id: 3,
    name: "3",
  },
  {
    id: 4,
    name: "4",
  },
  {
    id: 5,
    name: "5",
  },
];

const empylist = [];

function SchoolNameList({
  schoolname,
  setSelectedSchoolname,
  serverschoolnamelist,
}) {
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      {!schoolname && (
        <StyledDiv>
          {schoolData0.map((school) => {
            return (
              <SchoolName
                selected={false}
                schoolname={school.name}
                dummy={true}
              />
            );
          })}
        </StyledDiv>
      )}

      {schoolname && (
        <StyledDiv>
          {(serverschoolnamelist || []).map((school) => {
            return (
              <SchoolName
                selected={school.id === selectedSchoolId}
                schoolname={school.name}
                onClick={() => {
                  setSelectedSchoolId(school.id);
                  setSelectedSchoolname(school.id);
                  // axios
                  //   // .post("http://139.162.114.119:8080/api/auth", { email, password })
                  //   .get("https://api.scribbble.me/api/schools", {
                  //     params: "대명",
                  //   })
                  //   .then(function (response) {
                  //     console.log(response);
                  //     navigate(`/board`);
                  //   })
                  //   .catch(function (error) {
                  //     console.log(error);
                  //     alert(error.response.data.message);
                  //   });
                }}
                dummy={false}
              />
            );
          })}
        </StyledDiv>
      )}
    </>
  );
}

export default SchoolNameList;
