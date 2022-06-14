let filterTextParams = {
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

export const cols = [
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "name",
    headerName: "Name",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "fees",
    headerName: "Fees",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "validFor",
    headerName: "Valid For",
    filter: true,
    filterParams: filterTextParams,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    filter: true,
    filterParams: filterTextParams,
  },
];

export const ros = [
  {
    id: "25",
    name: "Jon",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "885",
    name: "Cersei",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "78",
    name: "Jaime",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "23",
    name: "Arya",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "55",
    name: "Daenerys",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "66",
    name: "Hommie",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "77",
    name: "Ferrara",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "88",
    name: "Rossini",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "44",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "78",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "79",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
  {
    id: "29",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
    lastUpdated: "14 June 2022",
  },
];
