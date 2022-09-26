import React from "react";
import { Box } from "@mui/material";
import NavBar from "./NavBar";

function Background({ children }) {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: 'url("/asset/bg-main.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "fixed",
          zIndex: -11,
        }}
      />
      <NavBar />
    </Box>
  );
}

export default Background;
