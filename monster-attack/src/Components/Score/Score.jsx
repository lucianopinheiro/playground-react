import React from "react";
import Box from "@mui/material/Box";
import "./Score.css";
import { width } from "@mui/system";

const score = function (props) {
  return (
    <Box className="" sx={{ width: "200px" }}>
      <h1>{props.name}</h1>
      <p>100%</p>
    </Box>
  );
};

export default score;
