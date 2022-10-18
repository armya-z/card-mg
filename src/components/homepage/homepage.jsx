import React from "react";
import Card from "../../ui/card";
import addcardui from "../transactions/addcardui";
import AddCard from "../transactions/addcardui";

function HomePage() {
  return (
    <>
      <div className="App">
        <AddCard />

        <Card
          name="mellat"
          number="1799 3684 2564 8642"
          owner="ali akbar"
          remaining="2,000,000,000  IRR"
        />

        <Card
          name="mellat"
          number="1799 3684 2564 8642"
          owner="ali akbar"
          remaining="1,025,000,000  IRR"
        />

        <Card
          name="mellat"
          number="1799 3684 2564 8642"
          owner="ali akbar"
          remaining="925,000,000  IRR"
        />
      </div>
    </>
  );
}

export default HomePage;
