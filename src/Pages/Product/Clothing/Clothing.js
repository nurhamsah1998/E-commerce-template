import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../../Component/ProductCard";
import { faker } from "@faker-js/faker";

function Clothing() {
  const fakeDataMaker = (params) => {
    const data = [];
    for (let i = 0; i < params; i++) {
      const images = faker.image.animals(1234, 2345, true);
      const fakeName = faker.commerce.product();
      const fakePrice = faker.finance.account(5);

      console.log(images);
      data.push({
        title: fakeName,
        price: fakePrice,
        image: images,
      });
    }

    return data;
  };
  const fake = fakeDataMaker(20);
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
          <ProductCard
            title={item.title}
            image={item?.image}
            price={item.price}
            key={index}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Clothing;
