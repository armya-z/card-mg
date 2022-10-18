import React from "react";
import styled from "styled-components";

const AddCard = (props) => {
  const Bg = styled.div`
    margin: 20px;
    align-items: center;
  `;
  const StyledButton = styled.button`
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: "Lalezar", cursive;
    background: rgb(4, 59, 85);
    color: white;
    width: 150px;
    height: 50px;
    box-shadow: 2px 2px 10px grey;
  `;
  const StyledInput = styled.input`
    font-size: 1.5rem;
    color: black;
    display: inline-flex;
    gap: 10px;
    margin: 5px;
    font-family: "Lalezar", cursive;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  return (
    <Bg>
      <StyledButton>افزودن کارت</StyledButton>
      <StyledInput placeholder="نام بانک" />
      <StyledInput placeholder="نام صاحب حساب" />
      <StyledInput placeholder="شماره کارت" />
    </Bg>
  );
};

export default AddCard;
