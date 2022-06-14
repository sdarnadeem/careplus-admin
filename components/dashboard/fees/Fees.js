import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const Fees = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Clinics" />
          <Tab label="Doctor" />
        </Tabs>
      </Box>
    </>
  );
};

export default Fees;
