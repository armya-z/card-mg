import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";

const StyledParagraph = styled.p`
  color: #ff0000;
  height: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Lalezar", cursive;
  font-size: 1.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  background-color: #0d1f56;
  height: 8rem;
  gap: 5px;
  width: 100%;
`;
const StyledSelect = styled.select`
  margin: 5px;
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
const StyledInput = styled.input`
  margin: 5px;
  width: 200px;
  border-radius: 5px;
  font-family: "Lalezar", cursive;
  border-color: #000000;
  border-width: 1px;
  text-align: center;
  height: 2rem;
`;
const StyledBottun = styled.button`
  border-bottom: 1px;
  font-family: "Lalezar", cursive;
  font-size: 1rem;
  background-color: #22a657;
  color: #ffffff;
  border-width: 1px;
  text-align: center;
  width: 70px;
  height: 30px;
  border-radius: 5px;
`;

const TrColoum = styled.h2`
  margin: 5px;
  flex-direction: column;
  display: flex;
  font-size: 1rem;
  font-weight: 350;
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
const Translist = styled.ol`
  border-radius: 5px;
  font-family: "Lalezar", cursive;
  border-color: #000000;
  text-align: center;
`;

const cardListUrl =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cardlist";
const TrList =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cards";

const Formcontainer = () => {
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState([]);

  const {
    register,
    handleSubmit,
    resetField,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bankname: "",
      cardnumber: "",
      cardowner: "",
      transaction: "",
      transactiondate: "",
    },
  });

  const onSubmit = (data) => {
    axios.post(TrList, data).then((Response) => {});
    setIsLoading(true);
    resetField("bankname");
    resetField("cardnumber");
    resetField("cardowner");
    resetField("transaction");
    resetField("transactiondate");
  };

  useEffect(() => {
    setIsLoading(false);
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    axios.get(TrList).then((Response) => {
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
      <StyledDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledSelect
            {...register("bankname", { required: true })}
          >
            <option value="">نام بانک</option>
            {cardList?.map((card) => (
              <option key={card.id}>
                {card.addBankNameInput}
              </option>
            ))}
          </StyledSelect>

          {errors.bankname &&
            errors.bankname.type === "required" && (
              <StyledParagraph>
                نام بانک انتخاب نشده است
              </StyledParagraph>
            )}

          <StyledSelect
            {...register("cardnumber", { required: true })}
          >
            <option value="">شماره کارت</option>
            {cardList?.map((card) => (
              <option key={card.id}>
                {card.addCardNumberInput}
              </option>
            ))}
          </StyledSelect>

          {errors.cardnumber &&
            errors.cardnumber.type === "required" && (
              <StyledParagraph>
                شماره کارت انتخاب نشده است
              </StyledParagraph>
            )}

          <StyledSelect
            {...register("cardowner", { required: true })}
          >
            <option value="">نام صاحب حساب</option>
            {cardList?.map((card) => (
              <option key={card.id}>
                {card.addCardOwnerInput}
              </option>
            ))}
          </StyledSelect>

          {errors.cardnumber &&
            errors.cardnumber.type === "required" && (
              <StyledParagraph>
                نام صاحب کارت انتخاب نشده است
              </StyledParagraph>
            )}

          <StyledInput
            {...register("transaction", {
              required: true,
            })}
            placeholder="مبلغ"
            type="number"
          />
          {errors.transaction &&
            errors.transaction.type === "required" && (
              <StyledParagraph>
                مبلغ تراکنش وارد نشده است
              </StyledParagraph>
            )}

          <StyledInput
            {...register("transactiondate", {
              required: true,
            })}
            placeholder="تاریخ"
            type="date"
          />
          {errors.transactiondate &&
            errors.transactiondate.type === "required" && (
              <StyledParagraph>
                تاریخ انتخاب نشده است
              </StyledParagraph>
            )}

          <StyledBottun type="submit">ثبت</StyledBottun>
        </form>
      </StyledDiv>

      {/* <Translist>
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
      </Translist> */}
    </div>
  );
};

export default Formcontainer;
