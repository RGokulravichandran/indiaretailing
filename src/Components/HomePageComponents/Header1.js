import React from "react";
import "./styles.css";
import img1 from "../../Images/image 43.png";
import img2 from "../../Images/Link ⏵ news4.jpg.png";
import img3 from "../../Images/Link ⏵ news4.jpg (1).png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Header1 = () => {
  // const CardData = [{ image:''}]
  return (
    <div className="Header1">
      <Card
        sx={{
          maxWidth: 420.65,
          height: 127.34,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CardActionArea>
          <div>
            <CardMedia
              sx={{ width: 117, height: 96.55 }}
              image={img2}
            ></CardMedia>
          </div>
          <div>
            <CardContent>
              <Typography>Hotspot</Typography>
              <Typography>
                Luxury hotspots: 5 most expensive high streets in the..
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Header1;

const Header1Card = ({ data }) => {
  return (
    <Card>
      <div>
        <CardMedia></CardMedia>
      </div>
      <div>
        <CardContent>
          <Typography></Typography>
          <Typography></Typography>
        </CardContent>
      </div>
    </Card>
  );
};
