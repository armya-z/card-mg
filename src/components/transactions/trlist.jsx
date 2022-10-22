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
  width: 200px;
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
  font-size: 1rem;
  background-color: #22a657;
  color: #ffffff;
  border-width: 1px;
  text-align: center;
  width: 70px;
  height: 40px;
  border-radius: 5px;
`;
const TrColoum = styled.h2`
  margin: 5px;
  flex-direction: column;
  display: flex;
  font-size: 1rem;
  font-weight: 350;
`;
const StyledSelect = styled.select`
  width: 200px;
  border-radius: 5px;
  font-family: "Lalezar", cursive;
  border-color: #000000;
  border-width: 1px;
  text-align: center;
  height: 2rem;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

//
//
const cardListUrl =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cardlist";

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
    useState();
  const [inputTransactionDate, setInputTransactionDate] =
    useState("");
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardList, setCardList] = useState([]);

  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      bankname: inputBankName,
      cardnumber: inputCardNumber,
      cardowner: inputCardOwner,
      transaction: inputTransaction,
      transactiondate: inputTransactionDate,
    };

    setIsLoading(true);

    axios
      .post(
        "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cards/",
        data
      )
      .then((Response) => {});

    setInputBankName("");
    setInputCardNumber("");
    setInputCardOwner("");
    setInputTransaction();
    setInputTransactionDate("");
  };

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    userList.get("cards").then((Response) => {
      setCardData(Response.data);
    });
  }, [isLoading]);
  useEffect(() => {
    axios.get(cardListUrl).then((Response) => {
      setCardList(Response.data);
    });
  }, []);

  return (
    <div>
      <FormComp>
        <StyledSelect>
          <option defaultValue="">نام بانک</option>
          {cardList?.map((card) => (
            <option key={card.id}>
              {card.addBankNameInput}
            </option>
          ))}
          ;
        </StyledSelect>

        <StyledSelect>
          <option defaultValue="">شماره کارت</option>
          {cardList?.map((card) => (
            <option key={card.id}>
              {card.addCardNumberInput}
            </option>
          ))}
          ;
        </StyledSelect>
        <StyledSelect>
          <option defaultValue="">صاحب کارت</option>
          {cardList?.map((card) => (
            <option key={card.id}>
              {card.addCardOwnerInput}
            </option>
          ))}
          ;
        </StyledSelect>
        <StyledInput
          type="number"
          value={inputTransaction}
          onChange={(e) =>
            setInputTransaction(e.target.value)
          }
          placeholder="مبلغ"
        />
        <StyledInput
          type="date"
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
