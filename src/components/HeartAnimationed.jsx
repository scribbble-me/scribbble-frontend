import blackboard from "../heart.jpg";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const StyledImg = styled.img`
  height: 7.1825rem;
  width: 8.5rem;
  margin: 1.5rem 0px;
  align-self: center;
`;

const StyledImg2 = styled.img`
  height: 7.1825rem;
  width: 9.5rem;
  margin: 1.5rem 0px;
  align-self: center;
`;

function HeartAnimationed(onClick) {
  const [shake, setShake] = useState(false);

  // return <StyledImg src={blackboard} onClick={() => setShake(1)} onAnimationEnd={() => setShake(1)}  />;
  function handleOnClick(e) {
    shake == true ? setShake(false) : setShake(true);
    // onClick;
  }
  return (
    <>
      {shake && <StyledImg2 src={blackboard} onClick={handleOnClick} />}
      {!shake && <StyledImg src={blackboard} onClick={handleOnClick} />}
    </>
  );
}

export default HeartAnimationed;
