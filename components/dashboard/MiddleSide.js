import React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const MiddleSide = () => {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
      <TextField
        elevation={2}
        fullWidth
        id="input-with-icon-textfield"
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Typography variant="h3">
        Welcome to <span style={{ color: "blue" }}>CarePlus</span>
      </Typography>
      <Typography variant="body1">Dashboard</Typography>
      <Paper elevation="2"></Paper>
    </Stack>
  );
};

export default MiddleSide;
