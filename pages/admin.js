import React from "react";

import Grid from "@mui/material/Grid";
import LeftSide from "../components/dashboard/LeftSide";
import RightSide from "../components/dashboard/RightSide";
import MiddleSide from "../components/dashboard/MiddleSide";

const Admin = () => {
  return (
    <>
      <div style={{ width: "100%", height: "70px" }}>Navbar</div>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <LeftSide />
        </Grid>
        <Grid item xs={6}>
          <MiddleSide />
        </Grid>
        <Grid item xs={4}>
          <RightSide />
        </Grid>
      </Grid>
    </>
  );
};

export default Admin;
