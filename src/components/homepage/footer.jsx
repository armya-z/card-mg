import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  const BG = styled.div`
    background-color: black;
    font-family: "Lalezar", cursive;
    font-size: 1.2rem;
    height: 250px;
    color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  `;
  const StyledUl = styled.ul`
    color: red;
  `;
  return (
    <BG>
      <StyledUl>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>افزودن کارت</li>
        </Link>
        <Link
          to="/trform"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li> تراکنش‌ها</li>
        </Link>
      </StyledUl>
    </BG>
  );
};

export default Footer;
