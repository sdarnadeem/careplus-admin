import React from "react";
import { useRouter } from "next/router";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "next/link";

import content from "./leftSideContent";
import c from "./LeftSide.module.css";

const LeftSide = () => {
  const { query } = useRouter();

  const activeTab = query.tab === undefined ? "dashboard" : query.tab;

  const renderItem = (id, Icon, text, slug) => {
    return (
      <Stack
        className={activeTab === slug && c.activeTab}
        direction="row"
        alignItems="center"
        spacing={1}
        key={id}
      >
        <Icon />
        <Link href={`?tab=${slug}`}>{text}</Link>
      </Stack>
    );
  };
  return (
    <Stack
      style={{ padding: "10px" }}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {content.map((item, i) => renderItem(i, item.icon, item.text, item.slug))}
    </Stack>
  );
};

export default LeftSide;
