import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NaviHeader = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  h1 {
    padding: 1.5rem;
  }
`;

const NaviLink = styled(Link)`
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
`;

function Navigation(props) {
  return (
    <>
      <NaviHeader>
        <NaviLink to="/">Home</NaviLink>
        <NaviLink to="/manual">Manual</NaviLink>
        <h1>My Account</h1>
        <h1>Login</h1>
      </NaviHeader>
    </>
  );
}

export default Navigation;
