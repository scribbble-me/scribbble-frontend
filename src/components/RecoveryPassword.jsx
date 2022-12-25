import { useState } from "react";
import styled from "styled-components";

const StyledText = styled.text`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

function RecoveryPassword() {
  return <StyledText>비밀번호 찾기</StyledText>;
}

export default RecoveryPassword;
