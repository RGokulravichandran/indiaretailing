import React from "react";
import "./styles.css";
import img1 from "../../Images/image 43.png";
import img2 from "../../Images/Link ⏵ news4.jpg.png";
import img3 from "../../Images/Link ⏵ news4.jpg (1).png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

const Header1 = () => {
  const CardData = [
    {
      id: 1,
      imageSrc: img1,
      title: "HOTSPOT",
      description: "Luxury hotspots: 5 most expensive high streets in the..",
    },
    {
      id: 2,
      imageSrc: img2,
      title: "AI",
      description: "5 ways to leverage the power of ChatGPT in retail",
    },
    {
      id: 3,
      imageSrc: img3,
      title: "SHIPPING",
      description: "Reliance to open 250 Azorte stores in 2-3 years",
    },
  ];
  return (
    <div className="Header1">
      <div className="Header1A">
        {CardData.map((data) => (
          <Header1Card data={data} />
        ))}
      </div>
    </div>
  );
};

const Header1Card = ({ data }) => {
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

export default Header1;
