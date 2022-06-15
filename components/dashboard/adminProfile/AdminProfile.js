import React from "react";

import { Grid, Button, Typography, Divider } from "@mui/material";

const AdminProfile = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item marginRight="auto">
          <Typography variant="h5" component="h5">
            Admin Profile
          </Typography>
        </Grid>
        <Grid item height="100%" alignItems="center">
          <Button variant="outlined" size="small">
            Update Admin
          </Button>
        </Grid>
        <Grid item height="100%" alignItems="center">
          <Button variant="outlined" size="small">
            Update Password
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default AdminProfile;
