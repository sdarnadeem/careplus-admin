import React from "react";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import content from "./leftSideContent";

const LeftSide = () => {
  const renderItem = (id, Icon, text) => {
    return (
      <Stack direction="row" alignItems="center" spacing={1} key={id}>
        <Icon />
        <p>{text}</p>
      </Stack>
    );
  };
  return (
    <Stack
      style={{ padding: "10px" }}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {content.map((item, i) => renderItem(i, item.icon, item.text))}
    </Stack>
  );
};

export default LeftSide;
