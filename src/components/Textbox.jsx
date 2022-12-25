import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: gray;
  font-size: 17px;
  color: white;
  margin-bottom: 25px;
`;

function Textbox({ placeholder, onChange }) {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
    onChange(e);
  }

  return <StyledInput placeholder={placeholder} onChange={handleChange} />;
}

export default Textbox;
