import React, { useMemo, useCallback, useRef } from "react";

import { Box, Tab, Tabs, Grid, Button } from "@mui/material";
import { AgGridReact } from "ag-grid-react";

import { cols, ros } from "./feesData";
import Dialog from "../../dialog/Dialog";

const Fees = () => {
  const [value, setValue] = React.useState(0);
  const gridRef = useRef();
  const [columns] = React.useState(cols);
  const [rows] = React.useState(ros);

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

  const handleChange = useCallback(() => {
    (event, newValue) => {
      setValue(newValue);
    };
  }, []);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

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

  const handleRowDoubleClicked = useCallback(() => {
    (row) => {
      setOpenDialog(true);
      setDialogDetails({
        title: `${selected.name}`,
        content: `I'm  ${selected.name}, I'm a heart sergon at BareHills lab. I've eight years of experience in the specified field.`,
        noText: "Delete",
        yesText: "Know More",
        yesFun: () => {
          router.push(`admin/clinic/${selected.id}`);
          setOpenDialog(false);
        },
        noFun: () => {
          setOpenDialog(false);
        },
      });
    };
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handleButtonClick = useCallback(() => {
    if (selected) {
      setDialogDetails({
        title: `Update ${selected.name} clinic`,
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
    }
  }, [selected]);
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
          {selected && (
            <Button
              sx={{ marginLeft: "auto" }}
              variant="outlined"
              size="small"
              onClick={handleButtonClick}
            >
              Update Clinic
            </Button>
          )}
        </Tabs>
      </Box>
      <div
        className="ag-theme-alpine"
        style={{ height: "80vh", width: "100%" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rows}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowSelection="multiple"
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

export default Fees;
