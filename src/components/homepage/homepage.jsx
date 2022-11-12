import React from "react";
import AddCard from "../transactions/addcardui";
import Header from "./header";
import Footer from "./footer";

function HomePage() {
  return (
    <>
      <Header />
      <AddCard />
      <Footer />
    </>
  );
}

export default HomePage;
