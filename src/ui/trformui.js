import React from "react";
import styled from "styled-components";

const CardListCom = (props) => {
  const FormComp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    background-color: #0d1f56;
    height: 8rem;
    gap: 5px;
  `;

  const StyledInput = styled.input`
    border-radius: 5px;
    font-family: "Lalezar", cursive;
    border-color: #000000;
    border-width: 1px;
    text-align: center;
    height: 2rem;
  `;
  const Translist = styled.ol`
    border-radius: 5px;
    font-family: "Lalezar", cursive;
    border-color: #000000;
    text-align: center;
  `;
  const TransListItem = styled.li`
    display: inline-flex;
    margin: 10px;
    flex-direction: column;
    padding: 10px 0px;
  `;
  const TrRow = styled.div`
    border-radius: 15px;
    background-color: #0d1f56;
    margin: 0px;
    padding: 10px;
    color: white;
    align-items: center;
  `;
  const StyledButtom = styled.button`
    border-bottom: 1px;
    font-family: "Lalezar", cursive;
    font-size: 0.8rem;
    background-color: #ffffff;
    color: black;
    border-width: 1px;
    text-align: center;
    height: 2rem;
    border-radius: 5px;
  `;
  const TrColoum = styled.h2`
    margin: 5px;
    flex-direction: column;
    display: flex;
    font-size: 1rem;
    font-weight: 350;
  `;
  return (
    <FormComp>
      <Translist>
        <TransListItem>
          <TrRow>
            <TrColoum>{props.card.company}</TrColoum>
            <TrColoum>{props.card.phone}</TrColoum>
            <TrColoum>{props.card.name}</TrColoum>
            <TrColoum>{props.card.username}</TrColoum>
            <TrColoum>{props.card.email}</TrColoum>
          </TrRow>
        </TransListItem>
      </Translist>
    </FormComp>
  );
};
export default CardListCom;
