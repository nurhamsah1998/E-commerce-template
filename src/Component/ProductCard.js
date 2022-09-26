import { Box, Grid, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import React from "react";

function ProductCard({ title, price }) {
  return (
    <Grid
      item
      sx={{
        width: 210,
        height: 240,
        cursor: "pointer",
        borderRadius: "10px 10px 10px 10px",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          transition: "0.2s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "#000 5px 5px 9px -5px",
          },
          bgcolor: "gray",
          width: "100%",
          height: "100%",
          position: "relative",
          borderRadius: "10px 10px 10px 10px",
        }}
      >
        <Box
          sx={{
            "&:active": {
              opacity: 0.1,
              bgcolor: cyan[500],
            },
            width: "100%",
            height: "100%",
            zIndex: 999,
            position: "absolute",
            borderRadius: "10px 10px 10px 10px",
          }}
        />
        <Box
          sx={{
            bgcolor: "#fff",
            width: "100%",
            height: 70,
            position: "absolute",
            bottom: 0,
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          <Box sx={{ p: 1 }}>
            <Typography color="GrayText">{title}</Typography>
            <Typography color="GrayText" fontSize={14}>
              {price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductCard;
