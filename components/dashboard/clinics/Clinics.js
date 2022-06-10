import React from "react";
import { Box, Tabs, Tab, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { columns, rows, showModal } from "./ClinicsData";

import DataGrid from "react-data-grid";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const Clinics = () => {
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = React.useState();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let dialogComponent;

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleRowClick = (row) => {
    setSelected(row);
  };

  const handleButtonClick = (text) => {
    setOpenDialog(true);
    dialogComponent = showModal(
      text,
      selected,
      handleCloseDialog,
      openDialog,
      setOpenDialog
    );
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
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "newClinic")}
          >
            Add Clinic
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "update")}
          >
            Update Clinic
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "delete")}
          >
            Delete Clinic
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleButtonClick.bind(null, "block")}
          >
            Block Clinic
          </Button>
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All Clinics" />
          <Tab label="Online Clinics" />
          <Tab label="Blocks Clinics" />
        </Tabs>

        <DataGrid
          style={{ height: "100vh", marginTop: "30px" }}
          columns={columns}
          rows={rows}
          className="rdg-light fill-grid"
          onRowClick={handleRowClick}
          selectedRows={(rows) => console.log(rows)}
        />
      </Box>
      {dialogComponent}
    </>
  );
};

export default Clinics;
