import React from "react";
import "./styles.css";
import SearchAppBar from "../Components/HomePageComponents/AppBar";
import TgMenu from "../Components/HomePageComponents/TgMenu";
import Header1 from "../Components/HomePageComponents/Header1";
import Header2 from "../Components/HomePageComponents/Header2";

const HomePage = () => {
  return (
    <div className="HomePage">
      <SearchAppBar />
      <TgMenu />
      <Header1 />
      <Header2 />
    </div>
  );
};

export default HomePage;
