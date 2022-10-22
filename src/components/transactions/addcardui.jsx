import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import UserCard from "../userCard/UserCard";

const Bg = styled.div`
  margin: 20px;
  padding: 200px;
  padding-bottom: 20px;
  padding-top: 20px;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: space-around;
  display: inline-flex;
`;
const StyledButton = styled.button`
  margin: 10px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-family: "Lalezar", cursive;
  background: rgb(4, 59, 85);
  color: white;
  width: 150px;
  height: 50px;
  box-shadow: 2px 2px 5px grey;
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
  box-shadow: 2px 2px 4px grey;
  border-radius: 5px;
`;

// (cardlist style)

const StyledCardList = styled.ol`
  border-radius: 5px;
  font-family: "Lalezar", cursive;
  border-color: #000000;
  text-align: center;
`;
const StyledCardItem = styled.li`
  width: 400px;
  height: 250px;
  font-size: 1.5rem;
  align-content: center;
  display: inline-flex;
  gap: 5px;
  font-family: "Lalezar", cursive;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 15px;
  border-radius: 15px;
  margin-top: 5px;
`;

// styles

const baseUrl =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cardlist";
function AddCard() {
  const [addBankNameInput, setAddBankNameInput] =
    useState("");
  const [addCardOwnerInput, setAddCardOwnerInput] =
    useState("");
  const [addCardNumberInput, setAddCardNumberInput] =
    useState("");
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [transations, setTransactions] = useState([]);
  const handlesubmit = (event) => {
    event.preventDefault();
    const data = {
      addBankNameInput: addBankNameInput,
      addCardNumberInput: addCardNumberInput,
      addCardOwnerInput: addCardOwnerInput,
    };
    setIsLoading(true);

    axios.post(baseUrl, data).then((Response) => {});

    setAddBankNameInput("");
    setAddCardNumberInput("");
    setAddCardOwnerInput("");
  };

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    axios.get(baseUrl).then((Response) => {
      setCardList(Response.data);
    });
  }, [isLoading]);

  useEffect(() => {
    axios
      .get(
        "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cards"
      )
      .then((response) => {
        setTransactions(response.data);
      });
  }, []);
  return (
    <>
      <Bg>
        <StyledButton onClick={handlesubmit}>
          افزودن کارت
        </StyledButton>

        <StyledInput
          type="text"
          placeholder="نام بانک"
          value={addBankNameInput}
          onChange={(e) =>
            setAddBankNameInput(e.target.value)
          }
        />
        <StyledInput
          type="text"
          placeholder="نام صاحب حساب"
          value={addCardOwnerInput}
          onChange={(e) =>
            setAddCardOwnerInput(e.target.value)
          }
        />
        <StyledInput
          type="text"
          placeholder="شماره کارت"
          value={addCardNumberInput}
          onChange={(e) =>
            setAddCardNumberInput(e.target.value)
          }
        />
      </Bg>

      <StyledCardList>
        {cardList?.map((cardinfo) => (
          <StyledCardItem key={cardinfo.id}>
            <UserCard
              cardInfo={cardinfo}
              transactions={transations}
            />
          </StyledCardItem>
        ))}
      </StyledCardList>
    </>
  );
}

export default AddCard;
