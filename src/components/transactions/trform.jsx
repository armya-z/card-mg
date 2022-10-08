import React, { useState } from "react";
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
const FormContainer = () => {
  const [inputBankName, setInputBankName] = useState("");
  const [inputCardNumber, setInputCardNumber] =
    useState("");
  const [inputCardOwner, setInputCardOwner] = useState("");

  const handlesubmit = (event) => {
    localStorage.setItem(
      [inputBankName],
      JSON.stringify(inputBankName)
    );
    localStorage.setItem(
      "inputCardNumber",
      JSON.stringify(inputCardNumber)
    );
    localStorage.setItem(
      "inputCardOwner",
      JSON.stringify(inputCardOwner)
    );
    event.preventDefault();
    setInputBankName("");
    setInputCardNumber("");
    setInputCardOwner("");
  };

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

        <StyledButtom onClick={handlesubmit}>
          "Submit"
        </StyledButtom>
      </FormComp>
    </>
  );
};

export default FormContainer;
