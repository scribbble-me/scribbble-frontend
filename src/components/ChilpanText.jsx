import styled from "styled-components";

const StyledText = styled.text`
  width: 100%;
  font-size: 30px;
  display: block;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: 5px;

  margin-bottom: 5px;
`;
const SubText = styled(StyledText)`
  font-size: 15px;
  margin-bottom: 30px;
  font-weight: lighter;
  margin-top: 0px;
`;

function ChilpanText() {
  return (
    <>
      <StyledText>내 좋아요 순위 확인하기</StyledText>
      <SubText>누가 가장 많은 좋아요를 받았을까요?</SubText>
    </>
  );
}

export default ChilpanText;
