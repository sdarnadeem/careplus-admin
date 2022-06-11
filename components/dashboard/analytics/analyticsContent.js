let textFilterParams = {
  filterOptions: ["contains", "notContains"],
  textFormatter: (r) => {
    if (r == null) return null;
    return r
      .toLowerCase()
      .replace(/[àáâãäå]/g, "a")
      .replace(/æ/g, "ae")
      .replace(/ç/g, "c")
      .replace(/[èéêë]/g, "e")
      .replace(/[ìíîï]/g, "i")
      .replace(/ñ/g, "n")
      .replace(/[òóôõö]/g, "o")
      .replace(/œ/g, "oe")
      .replace(/[ùúûü]/g, "u")
      .replace(/[ýÿ]/g, "y");
  },
  debounceMs: 200,
  suppressAndOrCondition: true,
};

const clinicColumns = [
  { field: "id", type: "number" },
  { field: "name", filter: true, filterParams: textFilterParams },
  { field: "open" },
  { field: "close" },
  {
    field: "officeAddress",
    filter: true,
    filterParams: textFilterParams,
  },
  { field: "doctors" },
];

const clinicRows = [
  {
    id: 25,
    name: "Jon",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 885,
    name: "Cersei",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 78,
    name: "Jaime",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 23,
    name: "Arya",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 55,
    name: "Daenerys",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 66,
    name: "Hommie",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 77,
    name: "Ferrara",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 88,
    name: "Rossini",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 44,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 78,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 79,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
  {
    id: 29,
    name: "Harvey",
    open: "09:00 AM",
    close: "05:00 PM",
    officeAddress: "27 Houston California",
    doctors: 12,
  },
];
const doctorColumns = [
  { key: "id", name: "ID", resizable: true },
  { key: "firstName", name: "First Name", resizable: true, sortable: true },
  { key: "lastName", name: "Last Name", resizable: true, sortable: true },
  { key: "address", name: "Address", resizable: true, sortable: true },
];

const doctorRows = [
  { id: 44, firstName: "Jon", lastName: "Twain", address: "Sopore, Sagipora" },
  {
    id: 990,
    firstName: "Cersei",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 224,
    firstName: "Jaime",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 334,
    firstName: "Arya",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 440,
    firstName: "Daenerys",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 370,
    firstName: "Hommie",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 284,
    firstName: "Ferrara",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 775,
    firstName: "Rossini",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 980,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 354,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 79,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
  {
    id: 29,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
  },
];
const userColumns = [
  { key: "id", name: "ID", resizable: true },
  { key: "firstName", name: "First Name", resizable: true, sortable: true },
  { key: "lastName", name: "Last Name", resizable: true, sortable: true },
  { key: "address", name: "Address", resizable: true, sortable: true },
  {
    key: "appointmentDate",
    name: "Appointment Date",
    resizable: true,
    sortable: true,
  },
  { key: "doctor", name: "Doctor", resizable: true, sortable: true },
  { key: "clinic", name: "Clinic", resizable: true, sortable: true },
];

const userRows = [
  {
    id: 154,
    firstName: "ALbert",
    lastName: "Helski",
    address: "Sopore, Sagipora",
    appointmentDate: "23-June-2023",
    doctor: "Alaxnder",
    clinic: "Summer Hall",
  },
  {
    id: 990,
    firstName: "Cersei",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 224,
    firstName: "Jaime",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 334,
    firstName: "Arya",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 440,
    firstName: "Daenerys",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 370,
    firstName: "Hommie",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 284,
    firstName: "Ferrara",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 775,
    firstName: "Rossini",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 980,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 354,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 79,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
  {
    id: 29,
    firstName: "Harvey",
    lastName: "Twain",
    address: "Sopore, Sagipora",
    appointmentDate: "31-July-2020",
    doctor: "Nadeem",
    clinic: "Tripmax",
  },
];

const data = [
  {
    rows: clinicRows,
    columns: clinicColumns,
  },
  {
    rows: doctorRows,
    columns: doctorColumns,
  },
  {
    rows: userRows,
    columns: userColumns,
  },
];

export default data;

export const rowData = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "Yenni",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    clinic: "Afar Labs",
    address: "Sagipora Sopore",
  },
];
