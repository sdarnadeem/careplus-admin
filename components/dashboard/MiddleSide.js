import React from "react";
import { useRouter } from "next/router";

import Doctors from "./doctors/Doctors.jsx";
import Analytics from "./analytics/Analytics";
import Clinics from "./clinics/Clinics";
import Fees from "./fees/Fees.js";
import Payments from "./payments/Payments.js";

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
      case "clinics":
        return <Clinics />;
      case "fees":
        return <Fees />;
      case "payments":
        return <Payments />;
      default:
        return <Analytics />;
    }
  };
  return (
    <Stack spacing={3}>
      {/* <TextField
        elevation={2}
        id="input-with-icon-textfield"
        width="30%"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      /> */}
      {renderTab()}
    </Stack>
  );
};

export default MiddleSide;
