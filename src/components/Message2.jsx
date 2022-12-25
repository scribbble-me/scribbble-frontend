import styled from "styled-components";
import GeneralText from "./GeneralText";
import MessageBoard from "./MessageBoard";
import ButtonFooter from "./ButtonFooter";

function Message2() {
  return (
    <>
      <GeneralText innertext={"조동현님에게 뜨끈한 국밥을 주세요"} />
      <MessageBoard />
      <ButtonFooter
        preb="/message1"
        prebtext="이전"
        next="/board"
        nexttext="메세지 남기기"
      />
    </>
  );
}

export default Message2;
