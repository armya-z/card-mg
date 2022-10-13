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
function FormContainer() {
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
    if (storage.length !== 0) {
      localStorage.setItem(
        "CardData",
        JSON.stringify(storage)
      );
    }
  }, [storage]);

  useEffect(() => {
    const initialStorage = JSON.parse(
      localStorage.getItem("CardData")
    );
    if (initialStorage !== null) {
      setStorage(initialStorage);
    }
  }, []);

  return (
    <>
      <FormComp>
        <StyledInput
          type="text"
          value={inputBankName}
          onChange={(e) => setInputBankName(e.target.value)}
          placeholder="Bank Name"
        />
        <StyledInput
          type="text"
          value={inputCardNumber}
          onChange={(e) =>
            setInputCardNumber(e.target.value)
          }
          placeholder="Card Number"
        />
        <StyledInput
          type="text"
          value={inputCardOwner}
          onChange={(e) =>
            setInputCardOwner(e.target.value)
          }
          placeholder="Card Owner"
        />
        <StyledInput
          type="text"
          value={inputTransaction}
          onChange={(e) =>
            setInputTransaction(e.target.value)
          }
          placeholder="transaction fee"
        />
        <StyledInput
          type="text"
          value={inputTransactionDate}
          onChange={(e) =>
            setInputTransactionDate(e.target.value)
          }
          placeholder=" date"
        />

        <StyledButtom onClick={handlesubmit}>
          "Submit"
        </StyledButtom>
      </FormComp>
    </>
  );
}

export default FormContainer;
