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
const instance = axios.create({
  baseURL: "https://jsonplaceholder.ir/users",
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
  const [storage, setStorage] = useState([]);

  const handlesubmit = (event) => {
    event.preventDefault();
    setStorage((prev) => [
      ...prev,
      {
        bankName: inputBankName,
        cardNumber: inputCardNumber,
        owner: inputCardOwner,
        transaction: inputTransaction,
        transactionDate: inputTransactionDate,
      },
    ]);

    setInputBankName("");
    setInputCardNumber("");
    setInputCardOwner("");
    setInputTransaction("");
    setInputTransactionDate("");
  };

  useEffect(() => {
    instance.get("/1").then((Response) => {
      setInputBankName(Response.data);
    });
    instance.get("/1").then((Response) => {
      setInputCardNumber(Response.data);
    });
    instance.get("/1").then((Response) => {
      setInputCardOwner(Response.data);
    });
    instance.get("/1").then((Response) => {
      setInputTransaction(Response.data);
    });
    instance.get("/1").then((Response) => {
      setInputTransactionDate(Response.data);
    });
  }, []);

  return (
    <div>
      <Translist>
        <TransListItem>
          <TrRow>
            <TrColoum>{inputBankName.company}</TrColoum>
            <TrColoum>{inputCardNumber.phone}</TrColoum>
            <TrColoum>{inputCardOwner.name}</TrColoum>
            <TrColoum>{inputTransaction.username}</TrColoum>
            <TrColoum>
              {inputTransactionDate.email}
            </TrColoum>
          </TrRow>
        </TransListItem>
      </Translist>
    </div>
  );
}

export default Trlist;
