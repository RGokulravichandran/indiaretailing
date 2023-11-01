import React from "react";
import "./styles.css";
import Vector from "../../Images/Vector.png";
import CloundImage from "../../Images/dateCloudImg.png.png";
import date from "../../Images/Friday, 30 June 2023.png";
import { Image } from "@mui/icons-material";
import { Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const TgMenu = () => {
  const menu2Content = [
    "Fashion & Lifestyle",
    "Beauty & Wellness",
    "Food & Beverage",
  ];
  return (
    <div className="TgMenu">
      <div className="tGMenus">
        <div className="optionButton">
          <img className="Vectorlogo" src={Vector}></img>
        </div>
        <div className="tGmenu1">
          <Typography
            className="tGmenu1Content"
            sx={{
              color: "#E21B22",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            Home
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            Categories
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            IR Prime
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            Events
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            Bookstore
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            NewsLetter
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontSize: 15,
              fontWeight: 700,

              textAlign: "left",
              fontFamily: "roboto",
              letterSpacing: "0em",
            }}
          >
            Video
          </Typography>
        </div>
        <div className="date">
          <img className="dateImage1" src={CloundImage}></img>
          <Typography
            sx={{
              color: "#616161",
              fontSize: 15.79,
              fontWeight: 400,
              textAlign: "center",
              fontFamily: "Lato",
              marginLeft: 0.5,
            }}
          >
            Friday, 30 June 2023
          </Typography>
        </div>
      </div>
      <div className="tGmenu2">
        <div className="tGmenu2Content">
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Fashion & Lifestyle
          </Typography>
          <CircleIcon
            sx={{
              width: 2,
              height: 2,
              color: "#E21B22",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Beauty & Wellness
          </Typography>
          <CircleIcon
            sx={{
              width: 2,
              height: 2,
              color: "#E21B22",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Food & Beverage
          </Typography>
          <CircleIcon
            sx={{
              width: 2,
              height: 2,
              color: "#E21B22",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Consumer Durables & IT
          </Typography>
          <CircleIcon
            sx={{
              width: 2,
              height: 2,
              color: "#E21B22",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Entertainment
          </Typography>
          <CircleIcon
            sx={{
              width: 2,
              height: 2,
              color: "#E21B22",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Home Decor & Furnishing
          </Typography>
          <CircleIcon
            sx={{
              width: 2,
              height: 2,
              color: "#E21B22",
              marginTop: "auto",
              marginBottom: "auto",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "inter",
              color: "#595959",
              fontWeight: 500,
              fontSize: 13,
            }}
          >
            Specialty Retail
          </Typography>
        </div>
      </div>
    </div>
  );
};

// const SecondMenu = (data) => {
//   console.log(data);
//   //   <div>
//   //     <Typography
//   //       sx={{
//   //         fontFamily: "inter",
//   //         color: "#595959",
//   //         fontWeight: 500,
//   //         fontSize: 13,
//   //       }}
//   //     >
//   //       {data}
//   //     </Typography>
//   //   </div>;
// };

export default TgMenu;
