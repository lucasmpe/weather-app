import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const WrapperNoMatch = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  color: #cccccc;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  cursor: default;
  &:hover {
      color: #45aaf4;
    }
`;

const NoMatch = () => {
  return (
    <WrapperNoMatch>
      <h4>No Match</h4>
      <StyledLink to="/">Go home</StyledLink>
    </WrapperNoMatch>
  );
};

export default NoMatch;
