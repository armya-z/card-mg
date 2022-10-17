import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
//
//
const userList = axios.create({
  baseURL:
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/",
});
function Trlist() {
  const [inputBankName, setInputBankName] = useState("");
  const [inputCardNumber, setInputCardNumber] =
    useState("");
  const [inputCardOwner, setInputCardOwner] = useState("");
  const [inputTransaction, setInputTransaction] =
    useState("");
  const [inputTransactionDate, setInputTransactionDate] =
    useState("");
  const [cardData, setCardData] = useState([]);

  const handlesubmit = (event) => {
    event.preventDefault();

    const data = {
      bankname: inputBankName,
      cardnumber: inputCardNumber,
      cardowner: inputCardOwner,
      transaction: inputTransaction,
      transactiondate: inputTransactionDate,
    };

    axios
      .post(
        "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cards/",
        data
      )
      .then((Response) => {});

    setInputBankName("");
    setInputCardNumber("");
    setInputCardOwner("");
    setInputTransaction("");
    setInputTransactionDate("");
  };

  useEffect(() => {
    userList.get("cards").then((Response) => {
      setCardData(Response.data);
    });
  }, []);

  return (
    <div>
      <FormComp>
        <StyledInput
          type="text"
          value={inputBankName}
          onChange={(e) => setInputBankName(e.target.value)}
          placeholder="نام بانک"
        />
        <StyledInput
          type="text"
          value={inputCardNumber}
          onChange={(e) =>
            setInputCardNumber(e.target.value)
          }
          placeholder="شماره کارت"
        />
        <StyledInput
          type="text"
          value={inputCardOwner}
          onChange={(e) =>
            setInputCardOwner(e.target.value)
          }
          placeholder="صاحب کارت"
        />
        <StyledInput
          type="text"
          value={inputTransaction}
          onChange={(e) =>
            setInputTransaction(e.target.value)
          }
          placeholder="مبلغ"
        />
        <StyledInput
          type="text"
          value={inputTransactionDate}
          onChange={(e) =>
            setInputTransactionDate(e.target.value)
          }
          placeholder="تاریخ"
        />

        <StyledButtom onClick={handlesubmit}>
          "ثبت"
        </StyledButtom>
      </FormComp>
      <Translist>
        {cardData?.map((card) => (
          <TransListItem key={card.id}>
            <TrRow>
              <TrColoum>{card.bankname}</TrColoum>
              <TrColoum>{card.cardnumber}</TrColoum>
              <TrColoum>{card.cardowner}</TrColoum>
              <TrColoum>{card.transaction}</TrColoum>
              <TrColoum>{card.transactiondate}</TrColoum>
            </TrRow>
          </TransListItem>
        ))}
      </Translist>
    </div>
  );
}

export default Trlist;
