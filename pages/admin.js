import React from "react";

import Grid from "@mui/material/Grid";
import LeftSide from "../components/dashboard/LeftSide";
import RightSide from "../components/dashboard/RightSide";

const Admin = () => {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <LeftSide />
      </Grid>
      <Grid item>
        <RightSide />
      </Grid>
    </Grid>
  );
};

export default Admin;
