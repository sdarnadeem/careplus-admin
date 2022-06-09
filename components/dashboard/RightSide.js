import React from "react";

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const RightSide = () => {
  return (
    <Stack>
      <Paper margin="10px">
        <Grid
          direction="column"
          container
          alignItems="center"
          justifyContent="center"
          height="300px"
          spacing={4}
        >
          <Avatar
            alt="Cindy Baker"
            src="https://via.placeholder.com/350x150"
            sx={{ width: 56, height: 56 }}
            mb={"20px"}
          />
          <Typography variant="h5">Nasyx Nadeem</Typography>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default RightSide;
