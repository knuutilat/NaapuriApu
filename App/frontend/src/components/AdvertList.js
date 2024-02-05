import AdCard from "./AdCard";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import SearchBar from "./SearchBar";
import MiniCard from "./MiniCard";




const AdvertList = (props) => {
  let items = props.list.map((item) => {
    return <AdCard key={item._id} item={item} index={true} />;
  });

  let itemslist = props.list.map((item) => {
    return <MiniCard key={item._id} item={item} index={true} />;
  });


  return (
    <>
    {itemslist}
    <SearchBar/>
    <div class="grid-container">
  
      {items}
    </div>
    </>
  );
};

export default AdvertList;
