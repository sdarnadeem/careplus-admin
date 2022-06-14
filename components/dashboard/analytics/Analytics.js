import React, { useState, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/router";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Box, Tabs, Tab, Button } from "@mui/material";

import data from "./analyticsContent";
import Dialog from "../../dialog/Dialog";

const Analytics = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const [selected, setSelected] = useState();
  const gridRef = useRef();
  const [dialogDetails, setDialogDetails] = React.useState({
    title: "",
    content: "",
    noText: "",
    yesText: "",
    yesFun: () => {},
    noFun: () => {},
  });
  const [openDialog, setOpenDialog] = React.useState(false);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const rowClickedListener = useCallback(({ data }) => {
    console.log("cellClicked", data);
    setSelected(data);
  }, []);

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  const clearFilters = useCallback(() => {
    gridRef.current.api.setFilterModel(null);
  }, []);

  const handleRowDoubleClicked = (row) => {
    setOpenDialog(true);
    setDialogDetails({
      title: `${selected.firstName} ${selected.lastName}`,
      content: `I'm  ${selected.firstName} ${selected.lastName}, I'm a heart sergon at BareHills lab. I've eight years of experience in the specified field.`,
      noText: "Delete",
      yesText: "Know More",
      yesFun: () => {
        let url;
        if (value === 0) {
          url = `admin/clinic/${selected.id}`;
        }
        if (value == 1) {
          url = `admin/doctor/${selected.id}`;
        }
        if (value == 2) {
          url = `admin/user/${selected.id}`;
        }
        if (value == 3) {
          url = `admin/appointment/${selected.id}`;
        }
        router.push(url);
        setOpenDialog(false);
      },
      noFun: () => {
        setOpenDialog(false);
      },
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Active Clinic" />
          <Tab label="Active Doctor" />
          <Tab label="Active User" />
          <Tab label="This month Appointment" />
          <Button
            sx={{ marginLeft: "auto" }}
            variant="outlined"
            size="small"
            onClick={clearFilters}
          >
            Reset Filters
          </Button>
        </Tabs>
      </Box>

      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={data[value].rows}
          columnDefs={data[value].columns}
          defaultColDef={defaultColDef}
          animateRows={true}
          onRowClicked={rowClickedListener}
          rowClass="my-green-class"
          getRowClass={getRowClass}
          checkboxSelection={true}
          onRowDoubleClicked={handleRowDoubleClicked}
        ></AgGridReact>
      </div>
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

export default Analytics;
