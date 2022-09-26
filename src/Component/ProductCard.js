import { Box, Grid, Typography } from "@mui/material";
import { cyan, red, yellow } from "@mui/material/colors";
import React from "react";

function ProductCard({ title, price, image, isHotSale }) {
  const hotSale = isHotSale ? (
    <Typography
      sx={{
        bgcolor: yellow[500],
        px: 1,
        borderRadius: "10px",
        fontSize: 14,
      }}
    >
      New!
    </Typography>
  ) : (
    <Typography
      sx={{
        bgcolor: red[500],
        px: 1,
        borderRadius: "10px",
        fontSize: 14,
        color: "#fff",
      }}
    >
      Hot!
    </Typography>
  );
  return (
    <Grid
      item
      sx={{
        cursor: "pointer",
        borderRadius: "10px 10px 10px 10px",
        boxShadow: "none",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "#000 5px 5px 9px -5px",
        },
        "&:active": {
          transform: "translateY(0px)",
          boxShadow: "#000 5px 5px 9px -5px",
        },
      }}
    >
      <Box sx={{ width: 240, height: 240, position: "relative" }}>
        <Box
          sx={{
            bgcolor: "blue",
            width: "100%",
            height: "100%",
            borderRadius: "10px 10px 0px 0px",
          }}
        />
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            top: 0,
            position: "absolute",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 1,
            }}
          >
            {isHotSale === "normal" ? null : hotSale}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          bgcolor: "#fff",
          width: "100%",
          height: 70,
          borderRadius: "0px 0px 10px 10px",
        }}
      >
        <Box sx={{ p: 1 }}>
          <Typography color="GrayText">{title}</Typography>
          <Typography color="GrayText" fontSize={14}>
            ${price}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default ProductCard;
