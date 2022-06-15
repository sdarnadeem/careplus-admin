import React from "react";

import { Grid, Button, Typography, Divider, Avatar } from "@mui/material";

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
      <Grid container>
        <Grid item>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            sx={{ width: 100, height: 100, marginRight: "20px" }}
          />
        </Grid>
        <Grid>
          <Grid item container>
            <Typography variant="h4" component="h6">
              Remy Sharp
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" component="p">
              CEO
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminProfile;
