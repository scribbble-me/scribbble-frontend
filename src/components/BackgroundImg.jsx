import styled from "styled-components";
import backgroundFile from "../newbackground.jpg";

// const Wrapper = styled.div`
//   background-image: url(${backgroundFile});
//   background-position: center center;
//   background-size: 37.5rem 42.5rem;
//   background-repeat: repeat-x;
//   height: 100%;
//   background-color: #1a1a2a;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   /* overflow: scroll; */
// `;

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-image: url(${backgroundFile});
  background-position: center center;
  background-size: 37.5rem 42.5rem;
  background-repeat: repeat-x;
  background-color: #1a1a2a;

  /* overflow: scroll; */
`;

const WidthLimitter = styled.div`
  width: 100%;
  max-width: 37.5rem;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function BackgroundImg({ children }) {
  return (
    <BackgroundWrapper>
      <WidthLimitter>{children}</WidthLimitter>
    </BackgroundWrapper>
  );
}

export default BackgroundImg;
