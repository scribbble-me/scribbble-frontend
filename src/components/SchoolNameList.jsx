import styled from "styled-components";
import SchoolName from "./SchoolName";
import { useState } from "react";

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
    name: "dddd",
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
];

function SchoolNameList({ schoolname }) {
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);

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
          {schoolData.map((school) => {
            return (
              <SchoolName
                selected={school.id === selectedSchoolId}
                schoolname={school.name}
                onClick={() => setSelectedSchoolId(school.id)}
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
