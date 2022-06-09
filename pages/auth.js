import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const TwoFactorAuth = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        rowSpacing={2}
        direction="column"
        alignItems="start"
        width="400px"
        height="400px"
        sx={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 4px", padding: "0 50px" }}
      >
        <Grid container item alignItems="center" justifyContent="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid
          spacing="3"
          mb="20px"
          container
          item
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h5" component="h5">
              Two factor authentication
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption" component="p">
              Open your authintactor app and emter the code for careplus
            </Typography>
          </Grid>
        </Grid>
        <Grid item mb="20px">
          <TextField
            required
            fullWidth
            name="code"
            autoFocus
            id="outlined-basic"
            label="Code"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Typography variant="body2" component="p">
            Can not have access to the app, send sms instead
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoFactorAuth;
