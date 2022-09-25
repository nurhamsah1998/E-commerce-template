import React from "react";
import { Box, Grid, Typography } from "@mui/material";

function NewIn() {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        columnSpacing={2}
      >
        <Grid item xs={7}>
          <Grid
            sx={{ width: "100%" }}
            container
            direction="column"
            rowSpacing={2}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item sx={{ width: "100%" }}>
              <Box
                sx={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 150,
                  borderRadius: 3,
                }}
              >
                alignItems
              </Box>
            </Grid>
            <Grid item sx={{ width: "100%" }}>
              <Box
                sx={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/1612353/pexels-photo-1612353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 150,
                  borderRadius: 3,
                }}
              >
                alignItems
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            columnSpacing={2}
          >
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/1832326/pexels-photo-1832326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 316,
                  borderRadius: 3,
                  color: "#fff",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    p: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    Wonder Women!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 316,
                  borderRadius: 3,
                  color: "#fff",
                }}
              >
                <Box sx={{ p: 1 }}>
                  <Typography variant="h6" fontWeight={700}>
                    Be Fashion!
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewIn;
