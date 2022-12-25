import styled from "styled-components";

const StyledNumber = styled.div`
  color: white;
  font-size: 30px;
  /* border: 1px solid red; */
  width: 40px;
  text-align: center;
`;

function RankingNumber({ rankingnumber }) {
  return (
    <>
      <StyledNumber>{rankingnumber}</StyledNumber>
    </>
  );
  {
    console.log("asdf2323", rankingnumber);
  }
}

export default RankingNumber;
