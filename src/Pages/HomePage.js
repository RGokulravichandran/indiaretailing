import React from "react";
import "./styles.css";
import SearchAppBar from "../Components/HomePageComponents/AppBar";
import TgMenu from "../Components/HomePageComponents/TgMenu";
import Header1 from "../Components/HomePageComponents/Header1";

const HomePage = () => {
  return (
    <div className="HomePage">
      <SearchAppBar />
      <TgMenu />
      <Header1 />
    </div>
  );
};

export default HomePage;
