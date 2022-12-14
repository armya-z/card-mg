import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import UserCard from "../userCard/UserCard";
import Loader from "../homepage/loader";

const Bg = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;
const StyledError = styled.div`
  color: #ff0000;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: "Lalezar", cursive;
  font-size: 1.1rem;
  text-align: center;
`;
const StyledButton = styled.button`
  margin: 5px;
  padding: 0;
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
  min-height: 500px;
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
const CardsUrl =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cards";
function AddCard() {
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [transations, setTransactions] = useState([]);
  const [isSpin, setIsSpin] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      addBankNameInput: "",
      addCardNumberInput: "",
      addCardOwnerInput: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    axios.post(baseUrl, data).then((Response) => {
      setIsLoading(false);
    });
    resetField("addBankNameInput");
    resetField("addCardNumberInput");
    resetField("addCardOwnerInput");
  };

  useEffect(() => {
    setIsSpin(true);
    axios
      .get(baseUrl)
      .then((Response) => {
        setCardList(Response.data);
        setIsSpin(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [isLoading]);

  useEffect(() => {
    setIsSpin(true);
    axios
      .get(CardsUrl)
      .then((response) => {
        setTransactions(response.data);
        setIsSpin(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);
  const spin = () => {
    if (isSpin) {
      return <Loader />;
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Bg>
          <StyledError>
            <StyledInput
              {...register("addBankNameInput", {
                required: true,
              })}
              type="text"
              placeholder="?????? ????????"
            />
            {errors.addBankNameInput &&
              errors.addBankNameInput.type ===
                "required" && <p>?????? ???????? ???? ????????????????</p>}
          </StyledError>

          <StyledError>
            <StyledInput
              {...register("addCardOwnerInput", {
                required: true,
              })}
              type="text"
              placeholder="?????? ???????? ????????"
            />
            {errors.addCardOwnerInput &&
              errors.addCardOwnerInput.type ===
                "required" && <p>?????? ???????? ???? ????????????????</p>}
          </StyledError>

          <StyledError>
            <StyledInput
              {...register("addCardNumberInput", {
                required: true,
              })}
              type="text"
              placeholder="?????????? ????????"
            />

            {errors.addCardNumberInput &&
              errors.addCardNumberInput.type ===
                "required" && <p>?????????? ???????? ???? ????????????????</p>}
          </StyledError>

          <StyledButton type="submit">
            ???????????? ????????
          </StyledButton>
        </Bg>

        <div>{spin()}</div>

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
      </form>
    </>
  );
}

export default AddCard;
