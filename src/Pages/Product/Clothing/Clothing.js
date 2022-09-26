import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../../Component/ProductCard";
import { faker } from "@faker-js/faker";

function Clothing() {
  const data = [
    { title: "Metaro", price: "$23" },
    { title: "UKIRO.pt", price: "$33" },
    { title: "Guano", price: "$13" },
    { title: "Pima Sport", price: "$43" },
    { title: "T-Shirt Go", price: "$11" },
    { title: "Pokimu", price: "$5" },
    { title: "Key Mouse", price: "$19" },
    { title: "Shoes", price: "$67" },
    { title: "Soccer Ball", price: "$22" },
  ];
  const fakeDataMaker = (params) => {
    const data = [];
    for (let i = 0; i < params; i++) {
      const fakeName = faker.commerce.product();
      const fakePrice = faker.finance.account(5);
      data.push({
        title: fakeName,
        price: fakePrice,
      });
    }
    return data;
  };
  const fake = fakeDataMaker(10);
  console.log(fake);
  return (
    <Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        columnSpacing={1}
        rowGap={2}
      >
        {fake?.map((item, index) => (
          <ProductCard title={item.title} price={item.price} key={index} />
        ))}
      </Grid>
    </Box>
  );
}

export default Clothing;
