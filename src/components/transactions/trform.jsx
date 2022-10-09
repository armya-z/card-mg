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
    event.preventDefault();
    var CardDataInput = {
      bank_name: inputBankName,
      bank_number: inputCardNumber,
      bank_owner: inputCardOwner,
    };
    let $oldLocal = localStorage.getItem("CardDataInput");
    var $newLocal;
    if ($oldLocal === null) {
      $newLocal = {
        data: [CardDataInput],
      };
    } else {
      var $oldLocalJson = JSON.parse($oldLocal);
      var $localData = $oldLocalJson.data;

      $localData.push(CardDataInput);
      $newLocal = {
        data: $localData,
      };
    }
    localStorage.setItem(
      "CardDataInput",
      JSON.stringify($newLocal)
    );
    setInputBankName("");
    setInputCardNumber("");
    setInputCardOwner("");
    /*
   
  
*/
    /*
    
    let $salam = [];
    if ($local === null) {
      $salam[0] = CardDataInput;
    }
    console.log($local);
    console.log(typeof CardDataInput);
*/
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
