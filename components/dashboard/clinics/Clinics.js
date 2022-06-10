import React from "react";
import { Box, Tabs, Tab, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { columns, rows } from "./ClinicsData";

import DataGrid from "react-data-grid";

const Clinics = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRowClick = (row) => {
    console.log(row);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <TextField
            size="small"
            elevation={2}
            id="input-with-icon-textfield"
            style={{ height: "10px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium">
            Add Clinic
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium">
            Update Clinic
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium">
            Delete Clinic
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" size="medium">
            Block Clinic
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="All Clinics" />
          <Tab label="Online Clinics" />
          <Tab label="Blocks Clinics" />
        </Tabs>

        <DataGrid
          style={{ height: "100vh" }}
          columns={columns}
          rows={rows}
          className="rdg-light fill-grid"
          onRowClick={handleRowClick}
          selectedRows={(rows) => console.log(rows)}
        />
      </Box>
    </>
  );
};

export default Clinics;
