import styled from "styled-components";

const StyledText = styled.text`
  width: 100%;
  font-size: ${(props) => props.fontsize};
  /* font-size: 30px; */
  color: white;
  text-align: left;
  display: inline-block;
`;

function GeneralText({ innertext, fontsize }) {
  return (
    <>
      <StyledText fontsize={fontsize}>{innertext}</StyledText>
    </>
  );
}

export default GeneralText;
