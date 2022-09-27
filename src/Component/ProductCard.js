import { Box, Grid, Typography } from "@mui/material";
import { cyan, red, yellow } from "@mui/material/colors";
import React from "react";

function ProductCard({ title, price, image, isHotSale }) {
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={4}
      lg={4}
      xl={3}
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
      <Box
        sx={{
          width: "100%",
          height: { xs: 150, sm: 240, md: 240 },
          position: "relative",
        }}
      >
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
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            {isHotSale ? (
              <Typography
                sx={{
                  bgcolor: red[500],
                  px: 1,
                  borderRadius: "10px",
                  fontSize: 17,
                  color: "#fff",
                }}
              >
                Hot!
              </Typography>
            ) : null}
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
