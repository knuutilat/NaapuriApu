import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = (props) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "rgb(28,37,36)",
          background:
            "linear-gradient(90deg, rgba(28,37,36,1) 0%, rgba(21,26,32,1) 61%, rgba(19,29,32,1) 100%)",
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography>NaapuriApu</Typography>
          </IconButton>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              ILMOITUKSET
            </Link>
          </Typography>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/form">
              LISÄÄ ILMOITUS
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Haku..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            <Link
              style={{
                fontWeight: "semibold",
                fontSize: "0.9em",
                textDecoration: "none",
                color: "white",
                float: "right",
              }}
              to="/form"
              onClick={props.logout}
            >
              KIRJAUDU ULOS
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
