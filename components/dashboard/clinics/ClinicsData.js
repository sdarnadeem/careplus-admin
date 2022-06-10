import Dialog from "../../dialog/Dialog";

export const columns = [
  { key: "id", name: "ID", resizable: true },
  { key: "name", name: "Name", resizable: true, sortable: true },
  { key: "open", name: "Open Time", resizable: true, sortable: true },
  { key: "close", name: "Close Time", resizable: true, sortable: true },
  {
    key: "officeAddress",
    name: "Office Address",
    resizable: true,
    sortable: true,
  },
];

export const rows = [
  {
    id: 25,
    name: "Jon",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 885,
    name: "Cersei",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 78,
    name: "Jaime",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 23,
    name: "Arya",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 55,
    name: "Daenerys",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 66,
    name: "Hommie",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 77,
    name: "Ferrara",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 88,
    name: "Rossini",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 44,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 78,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 79,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
  {
    id: 29,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
  },
];

export function showModal(
  text,
  selected,
  handleCloseDialog,
  openDialog,
  setOpenDialog
) {
  console.log(text);
  if (text === "newClinic") {
  } else {
    if (selected) {
      if (text === "update") {
      } else if (text === "delete") {
        return (
          <Dialog
            open={openDialog}
            close={handleCloseDialog}
            title="Delete Clinic"
            content={`Are you sure you want to delete ${selected.name}?`}
            noFun={() => {}}
            yesFun={() => {}}
            noText="Cancel"
            yesText="Confirm"
          />
        );
      } else if (text === "block") {
      }
    } else {
    }
  }
}
