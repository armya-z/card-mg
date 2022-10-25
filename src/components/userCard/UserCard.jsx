import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardDataUi = styled.h1`
  font-size: 1.2rem;
  font-family: "Lalezar", cursive;
  color: white;
  gap: 50px;
`;
const StyledCardItem = styled.li`
  width: 370px;
  height: 250px;
  font-size: 1.5rem;
  align-content: center;
  display: inline-flex;
  gap: 5px;
  background: rgb(4, 59, 85);
  font-family: "Lalezar", cursive;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  margin: 15px;
  border-radius: 15px;
  margin-top: 5px;
`;

const UserCard = ({ cardInfo, transactions }) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const specficTransactions = transactions.filter(
      (transaction) =>
        transaction.cardnumber ===
        cardInfo.addCardNumberInput
    );
    let summary = 0;
    specficTransactions.forEach((item) => {
      summary = summary + Number(item.transaction);
    });

    setSum(summary);
  }, []);

  return (
    <StyledCardItem key={cardInfo.id}>
      <>
        <div>
          <CardDataUi>
            {cardInfo.addBankNameInput}
          </CardDataUi>

          <CardDataUi>
            {cardInfo.addCardNumberInput}
          </CardDataUi>

          <CardDataUi>
            {cardInfo.addCardOwnerInput}
          </CardDataUi>

          <CardDataUi>
            {(30000000 - sum).toLocaleString("en-US")}T
          </CardDataUi>
        </div>
      </>
    </StyledCardItem>
  );
};

export default UserCard;
