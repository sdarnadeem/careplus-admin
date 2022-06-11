import React from "react";
import { Box, Tabs, Tab, Grid, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

import { columns, rows } from "./ClinicsData";
import Dialog from "../../dialog/Dialog";

import DataGrid from "react-data-grid";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

const Clinics = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = React.useState();
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleRowClick = (row) => {
    setSelected(row);
  };

  const handleButtonClick = (text) => {
    if (text === "newClinic") {
      router.push("admin/update/clinic");
    } else if (selected) {
      setOpenDialog(true);
      if (text === "update") {
      } else if (text === "delete") {
        setDialogDetails({
          title: `Delete ${selected.name} clinic`,
          content: `Are you sure you want to delete ${selected.name} clinic`,
          noText: "Cancel",
          yesText: "Confirm",
          yesFun: () => {
            setOpenDialog(false);
          },
          noFun: () => {
            setOpenDialog(false);
          },
        });
      } else if (text === "block") {
        setDialogDetails({
          title: `Block ${selected.name} clinic`,
          content: `Are you sure you want to block ${selected.name} clinic`,
          noText: "Cancel",
          yesText: "Confirm",
          yesFun: () => {
            setOpenDialog(false);
          },
          noFun: () => {
            setOpenDialog(false);
          },
        });
      }
    }
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
        {selected && (
          <>
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
          </>
        )}
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
      {openDialog && selected && (
        <Dialog
          open={openDialog}
          handleClose={handleCloseDialog}
          title={dialogDetails.title}
          content={dialogDetails.content}
          noText={dialogDetails.noText}
          yesText={dialogDetails.yesText}
          yesFun={dialogDetails.yesFun}
          noFun={dialogDetails.noFun}
        />
      )}
    </>
  );
};

export default Clinics;
