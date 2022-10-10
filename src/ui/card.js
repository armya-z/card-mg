import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const AtmCard = styled.div`
    width: 400px;
    font-size: 1.5rem;
    align-content: center;
    display: inline-flex;
    gap: 5px;
    background: rgb(4, 59, 85);
    font-family: "Lalezar", cursive;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    margin: 15px;
    border-radius: 15px;
    margin-top: 5px;
  `;

  const NameCard = styled.h1`
    font-size: 1.2rem;
    font-family: "Lalezar", cursive;
    color: white;
  `;
  const NumCard = styled.h2`
    font-size: 1.2rem;
    font-family: "Lalezar", cursive;
    color: white;
  `;

  const OwnCard = styled.h3`
    font-size: 1.2rem;
    font-family: "Lalezar", cursive;
    color: white;
  `;
  return (
    <AtmCard>
      <NameCard>{props.name}</NameCard>
      <NumCard>{props.number}</NumCard>
      <OwnCard>{props.owner}</OwnCard>
    </AtmCard>
  );
};

export default Card;