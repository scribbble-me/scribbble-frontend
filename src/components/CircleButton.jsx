import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const StyledCircleButton = styled.button`
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
`;

const StyledText = styled.text`
  width: 100%;
  color: white;
  font-size: 0.8rem;
  display: block;
`;

function CircleButton({ innertext, onClick }) {
  return (
    <>
      <StyledDiv>
        <StyledCircleButton onClick={onClick} />
        <StyledText>{innertext}</StyledText>
      </StyledDiv>
    </>
  );
}

export default CircleButton;
