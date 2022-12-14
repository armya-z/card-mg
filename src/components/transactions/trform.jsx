import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import Header from "../homepage/header";
import Footer from "../homepage/footer";
import Loader from "../homepage/loader";

const StyledError = styled.div`
  color: #ff0000;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: "Lalezar", cursive;
  font-size: 0.8rem;
  gap: 20px;
  text-align: center;
  width: auto;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  background-color: #0d1f56;
  height: 8rem;
  gap: 5px;
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
  width: 85%;
`;
const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  margin: 5px;
  gap: 5px;
  padding: 5px;
  align-items: center;
`;

const StyledDivCheckBox = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: "Lalezar", cursive;
  padding: 20px;
  margin: 10px;
  width: 10%;
  justify-items: center;
  align-items: flex-start;
  /* border-style: groove;
  border-width: 2px;
  border-radius: 5px; */
`;
const SideBar = styled.div`
  min-height: 500px;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const cardListUrl =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cardlist";
const TrList =
  "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/cards";

const Formcontainer = () => {
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [filterValue, setFilterValue] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isSpin, setIsSpin] = useState(false);

  const {
    register,
    handleSubmit,
    resetField,
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
    setIsLoading(true);
    axios
      .post(TrList, data)
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });

    resetField("bankname");
    resetField("cardnumber");
    resetField("cardowner");
    resetField("transaction");
    resetField("transactiondate");
  };

  const toggleFilter = () => {
    const specificCheckList =
      document.querySelectorAll(".cbox:checked");
    let checkList = [];
    specificCheckList.forEach((element) => {
      checkList.push(element.value);
    });
    setFilterValue(checkList);
    return checkList;
  };

  useEffect(() => {
    if (filterValue.length === 0) {
      setFilteredData(cardData);
    } else {
      let filterResult = cardData.filter((x) => {
        return filterValue.includes(x.cardowner);
      });
      setFilteredData(filterResult);
    }
  }, [filterValue]);

  useEffect(() => {
    setIsSpin(true);
    axios
      .get(TrList)
      .then((Response) => {
        setCardData(Response.data);
        setIsSpin(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSpin(false);
      });
  }, [isLoading]);

  useEffect(() => {
    setIsSpin(true);
    axios
      .get(cardListUrl)
      .then((Response) => {
        setCardList(Response.data);
        setIsSpin(false);
      })
      .catch((err) => {
        console.error(err);
        setIsSpin(false);
      });
  }, []);
  const spin = () => {
    if (isSpin) {
      return <Loader />;
    }
  };
  return (
    <>
      <Header />
      <div>
        <StyledDiv>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledSelect
              {...register("bankname", { required: true })}
            >
              <option value="">?????? ????????</option>
              {cardList?.map((card) => (
                <option key={card.id}>
                  {card.addBankNameInput}
                </option>
              ))}
            </StyledSelect>

            <StyledSelect
              {...register("cardnumber", {
                required: true,
              })}
            >
              <option value="">?????????? ????????</option>
              {cardList?.map((card) => (
                <option key={card.id}>
                  {card.addCardNumberInput}
                </option>
              ))}
            </StyledSelect>

            <StyledSelect
              {...register("cardowner", { required: true })}
            >
              <option value="">?????? ???????? ????????</option>
              {cardList?.map((card) => (
                <option key={card.id}>
                  {card.addCardOwnerInput}
                </option>
              ))}
            </StyledSelect>

            <StyledInput
              {...register("transaction", {
                required: true,
              })}
              placeholder="????????"
              type="number"
            />

            <StyledInput
              {...register("transactiondate", {
                required: true,
              })}
              placeholder="??????????"
              type="date"
            />

            <StyledBottun type="submit">??????</StyledBottun>
            <StyledError>
              {errors.bankname &&
                errors.bankname.type === "required" && (
                  <p>?????? ???????? ???????????? ???????? ??????</p>
                )}

              {errors.cardnumber &&
                errors.cardnumber.type === "required" && (
                  <p>?????????? ???????? ???????????? ???????? ??????</p>
                )}

              {errors.cardowner &&
                errors.cardowner.type === "required" && (
                  <p>?????? ???????? ???????? ???????????? ???????? ??????</p>
                )}

              {errors.transaction &&
                errors.transaction.type === "required" && (
                  <p>???????? ???????????? ???????? ???????? ??????</p>
                )}

              {errors.transactiondate &&
                errors.transactiondate.type ===
                  "required" && (
                  <p>?????????? ???????????? ???????? ??????</p>
                )}
            </StyledError>
          </form>
        </StyledDiv>
      </div>
      <div>{spin()}</div>

      <SideBar>
        <Translist>
          {filterValue.length === 0 &&
            cardData?.map((card) => (
              <TransListItem key={card.id}>
                <TrRow>
                  <TrColoum>{card.bankname}</TrColoum>
                  <TrColoum>{card.cardnumber}</TrColoum>
                  <TrColoum>{card.cardowner}</TrColoum>
                  <TrColoum>{card.transaction}</TrColoum>
                  <TrColoum>
                    {card.transactiondate}
                  </TrColoum>
                </TrRow>
              </TransListItem>
            ))}
          {filterValue.length !== 0 &&
            filteredData?.map((card) => (
              <TransListItem key={card.id}>
                <TrRow>
                  <TrColoum>{card.bankname}</TrColoum>
                  <TrColoum>{card.cardnumber}</TrColoum>
                  <TrColoum>{card.cardowner}</TrColoum>
                  <TrColoum>{card.transaction}</TrColoum>
                  <TrColoum>
                    {card.transactiondate}
                  </TrColoum>
                </TrRow>
              </TransListItem>
            ))}
        </Translist>

        <StyledDivCheckBox>
          {cardList.map((card) => (
            <div key={card.id}>
              <StyledCheckbox
                className="cbox"
                type="checkbox"
                value={card.addCardOwnerInput}
                lable={card.addCardOwnerInput}
                onClick={toggleFilter}
              />
              <label>{card.addCardOwnerInput}</label>
            </div>
          ))}
        </StyledDivCheckBox>
      </SideBar>
      <Footer />
    </>
  );
};

export default Formcontainer;
