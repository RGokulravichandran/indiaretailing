import React from "react";
import "./styles.css";
import MainImage from "../../Images/Link ⏵ Figure ⏵ 169731-rbmaxpyfhd-1644061237.jpg.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, Typography } from "@mui/material";
import img1 from "../../Images/image 34.png";
import img2 from "../../Images/image 34 (1).png";
import img3 from "../../Images/image 34 (2).png";
import adsImg from "../../Images/image 41.png";

const Header2 = () => {
  const CardData = [
    {
      id: 1,
      imageSrc: img1,
      title: "SELECT CITYWALK",
      description: "Wow! Momo Foods enters Bhopal with Wow!",
      type: "Citywalk",
      hashTag: "#reel stories podcast",
    },
    {
      id: 2,
      imageSrc: img2,
      title: "FOOD & BEVERAGE",
      description:
        "KFC opens another outlet in Punjab KFC opens another outlet in Punjab",
      type: "Beverage",
      hashTag: "#reel stories podcast",
    },
    {
      id: 3,
      imageSrc: img3,
      title: "SELECT CITYWALK",
      description: "FNP (Ferns N Petals) appoints Ashish Goels",
      type: "Citywalk",
      hashTag: "#reel stories podcast",
    },
  ];
  return (
    <div className="Header2">
      <div className="Header2Div1">
        <Card>
          <CardMedia
            sx={{
              width: 599,
              height: 347,
              top: 423.23,
              left: 35.21,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
            image={MainImage}
            alt="Image"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 567.55,
                height: 116.91,
                top: 644.68,
                left: 54.14,
              }}
            >
              <Button
                sx={{
                  width: 73.01,
                  height: 27.15,
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  fontSize: 12.41,
                  backgroundColor: "#F92A28",
                }}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: 8.41,
                  }}
                >
                  in focus
                </Typography>
              </Button>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: 21.43,
                  color: "#ffffff",
                }}
              >
                Rahul Gandhi In Manipur: Chopper Ride After Women Protesters
                Surround Car
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Droid Sans",
                  fontWeight: 400,
                  fontSize: 16.85,
                  color: "#ffffff",
                }}
              >
                Rahul Gandhi
              </Typography>
            </CardContent>
          </CardMedia>
        </Card>
        <div>
          {CardData.map((data) => (
            <Header2Card data={data} />
          ))}
        </div>
      </div>
      <div className="Header2Div2">
        <Typography>Latest News</Typography>
      </div>
      <div className="Header2Div3">
        <Typography>- Advertisement -</Typography>
        <img src={adsImg}></img>
      </div>
    </div>
  );
};

const Header2Card = ({ data }) => {
  return (
    <div className="Header1CardDiv">
      <Card
        sx={{
          maxWidth: 410.48,
          height: 90.67,
          top: 257.67,
          left: 974.12,
          // borderRadius: 6.01,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 117,
            height: 96.55,
            top: 254.72,
            left: 68.95,
            // borderRadius: 5.65,
          }}
          image={data.imageSrc}
          alt="Image"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",

            marginRight: "auto",
            width: 251.46,
            height: 55.1,
            top: 275.42,
            left: 649.87,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#E21B22",
                fontFamily: "roboto",
                fontWeight: 600,
                fontSize: 14.69,
              }}
              component="div"
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                color: "#000000",
                fontFamily: "inter",
                fontWeight: 400,
                fontSize: 16.27,
              }}
            >
              {data.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Header2;
