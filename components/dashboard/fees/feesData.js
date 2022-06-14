let firstNameFilterParams = {
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

export const columns = [
  {
    field: "id",
    headerName: "ID",
    filter: true,
    filterParams: firstNameFilterParams,
  },
  {
    field: "name",
    headerName: "Name",
    filter: true,
    filterParams: firstNameFilterParams,
  },
  {
    field: "fees",
    headerName: "Fees",
    filter: true,
    filterParams: firstNameFilterParams,
  },
  {
    field: "validFor",
    headerName: "Valid For",
    filter: true,
    filterParams: firstNameFilterParams,
  },
];

export const rows = [
  {
    id: "25",
    name: "Jon",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "885",
    name: "Cersei",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "78",
    name: "Jaime",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "23",
    name: "Arya",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "55",
    name: "Daenerys",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "66",
    name: "Hommie",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "77",
    name: "Ferrara",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "88",
    name: "Rossini",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "44",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "78",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "79",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
  },
  {
    id: "29",
    name: "Harvey",
    fees: "$14",
    validFor: "14 Days",
  },
];
