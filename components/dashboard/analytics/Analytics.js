import React from "react";

import DataGrid from "react-data-grid";
import { Box, Tabs, Tab } from "@mui/material";

import data from "./analyticsContent";

const Analytics = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRowClick = (row) => {
    console.log(row);
  };
  const handleSort = (row) => {};
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
        style={{ height: "100vh" }}
        columns={data[value].columns}
        rows={data[value].rows}
        className="rdg-light fill-grid"
        onRowClick={handleRowClick}
        onSort={handleSort}
      />
    </>
  );
};

export default Analytics;
