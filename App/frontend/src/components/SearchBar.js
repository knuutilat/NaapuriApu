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

const SearchBar = (props) => {
  const Search = styled("div")(({ theme }) => ({
    position: "absolute",
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
        width: "140ch",
        "&:focus": {
          width: "160ch",
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
            "-gradient(90deg, rgbalinear(28,37,36,1) 0%, rgba(21,26,32,1) 61%, rgba(19,29,32,1) 100%)",
        }}
        position="static"
      >
        <Toolbar>

          <Search
          sx={{margin:"auto"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Haku..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchBar;
