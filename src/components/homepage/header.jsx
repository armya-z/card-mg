import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const Bg = styled.div`
    height: 80px;
    align-items: center;
    align-content: flex-start;
    font-family: "Lalezar", cursive;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 10px;
    gap: 5px;
  `;

  const Logo = styled.img`
    width: 150px;
    margin: 20px;
  `;
  const StyledMenubutton = styled.button`
    border-radius: 5px;
    font-family: "Lalezar", cursive;
    padding: 5px 24px;
    font-size: 1.2rem;
    border: 2px solid #000000;
    background-color: #ffcc00;
    :hover {
      background-color: #ff0000;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `;
  return (
    <>
      <Bg>
        <Logo src="https://tourandto.com/images/pin-persian.svg" />

        <Link to="/trform">
          <StyledMenubutton>تراکنش‌ها</StyledMenubutton>
        </Link>
        <Link to="/">
          <StyledMenubutton>افزودن کارت</StyledMenubutton>
        </Link>
      </Bg>
    </>
  );
};

export default Header;
