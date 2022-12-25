import styled from "styled-components";

const StyledText = styled.text`
  font-size: 17px;
  color: gray;
  margin-bottom: 15px;
`;

function InputText({ innertext }) {
  return (
    <>
      <StyledText>{innertext}</StyledText>
    </>
  );
}

export default InputText;
