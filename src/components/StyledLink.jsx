import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const NewLink = styled(Link)`
  width: 100%;
`;

function StyledLink({ children, to }) {
  return <NewLink to={to}>{children}</NewLink>;
}

export default StyledLink;
