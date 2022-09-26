import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../../Component/ProductCard";
import { faker } from "@faker-js/faker";

function Clothing() {
  const fakeDataMaker = (params) => {
    const data = [];
    for (let i = 0; i < params; i++) {
      const images = faker.image.food(640, 480, true);
      const fakeName = faker.commerce.product();
      const fakePrice = faker.finance.account(2);
      const randomBoolean = Math.floor(Math.random() * 3);
      data.push({
        title: fakeName,
        price: fakePrice,
        image: images,
        isHotSale: randomBoolean === 2 ? "normal" : Boolean(randomBoolean),
      });
      console.log(randomBoolean);
    }

    return data;
  };
  const fake = fakeDataMaker(20);
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
            isHotSale={item?.isHotSale}
            title={item?.title}
            image={item?.image}
            price={item?.price}
            key={index}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Clothing;
