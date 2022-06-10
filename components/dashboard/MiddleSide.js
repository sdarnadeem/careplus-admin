import React from "react";
import { useRouter } from "next/router";

import Doctors from "./doctors/Doctors.jsx";
import Analytics from "./analytics/Analytics";

import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const MiddleSide = () => {
  const {
    query: { tab },
  } = useRouter();

  const renderTab = () => {
    switch (tab) {
      case "doctors":
        return <Doctors />;
      default:
        return <Analytics />;
    }
  };
  return (
    <Stack spacing={3}>
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
      {renderTab()}
    </Stack>
  );
};

export default MiddleSide;
