import React from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const MiddleSide = () => {
  return (
    <Stack>
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
    </Stack>
  );
};

export default MiddleSide;
