import * as React from "react";
import "./styles.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../Images/logo.png";
import { Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: "#B0B0B0",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      {/* <Toolbar> */}
      <div className="AppBar">
        <div className="Search">
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  width: 14.32,
                  height: 14.12,
                  top: 48.39,
                  left: 40.54,
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{
                fontFamily: "roboto",
                fontSize: 14.12,
                fontWeight: 400,
                lineHeight: 16.55,
              }}
              placeholder="Search here..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>

        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography> */}

        <div className="Logo">
          <img className="indiaRetailLogo" src={logo}></img>
        </div>
        <div className="subscribeAndSignIn">
          <Button
            sx={{
              backgroundColor: "#E21B22",
              width: 87.97,
              fontFamily: "roboto",
              fontSize: 10.67,
              fontWeight: 700,
              alignItems: "center",
            }}
            variant="filled"
          >
            subscribe
          </Button>
          <Button
            sx={{
              color: "#0A0A0A",
              fontFamily: "roboto",
              fontSize: 10.67,
              fontWeight: 700,
              alignItems: "center",
            }}
            variant="filled"
          >
            sign in
          </Button>
        </div>
      </div>
      {/* </Toolbar> */}
    </AppBar>
    // </Box>
  );
}
