import React, { useMemo, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { rowData, columnDefs } from "./doctorsData";

const Doctors = () => {
  const gridRef = useRef();
  columnDefs.checkboxSelection = () => true;

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const cellClickedListener = useCallback((event) => {
    console.log("cellClicked", event);
  }, []);

  const buttonListener = useCallback((e) => {
    gridRef.current.api.deselectAll();
  }, []);

  const getRowClass = (params) => {
    if (params.node.rowIndex % 2 === 0) {
      return "my-shaded-effect";
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "80vh", width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
        onCellClicked={cellClickedListener}
        rowClass="my-green-class"
        getRowClass={getRowClass}
        checkboxSelection={true}
      ></AgGridReact>
    </div>
  );
};

export default Doctors;
