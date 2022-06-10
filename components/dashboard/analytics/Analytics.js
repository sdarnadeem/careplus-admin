import React from "react";

import DataGrid from "react-data-grid";
import { Box, Tabs, Tab } from "@mui/material";

import { clinicRows, clinicColumns } from "./analyticsContent";

const Analytics = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Active Clinic" />
          <Tab label="Active Doctor" />
          <Tab label="Active User" />
          <Tab label="This month Appointment" />
        </Tabs>
      </Box>
      <DataGrid
        columns={clinicColumns}
        rows={clinicRows}
        style={{ backgroundColor: "white !important" }}
        className="rdg-light"
      />
    </>
  );
};

export default Analytics;
