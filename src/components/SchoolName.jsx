import styled from "styled-components";
import { useState } from "react";

const StyledSchoolName = styled.button`
  width: 100%;
  font-size: 17px;
  color: ${(props) => (props.dummy ? "transparent" : "white")};
  padding: 7px;
  background-color: ${(props) => (props.selected ? "#262538" : "transparent")};
  /* opacity: ${(props) => (props.selected ? 0.7 : 1)}; */
  border-color: transparent;
  text-align: left;
  outline: 0;
`;

function SchoolName({ selected, schoolname, onClick, dummy }) {
  return (
    <>
      <StyledSchoolName selected={selected} onClick={onClick} dummy={dummy}>
        {schoolname}
      </StyledSchoolName>
    </>
  );
}

export default SchoolName;
