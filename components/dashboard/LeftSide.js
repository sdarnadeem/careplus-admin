import React from "react";
import { useRouter } from "next/router";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "next/link";

import content from "./leftSideContent";
import c from "./LeftSide.module.css";
import { Typography } from "@mui/material";

const LeftSide = () => {
  const { query } = useRouter();
  const router = useRouter();

  const activeTab = query.tab === undefined ? "dashboard" : query.tab;

  const handleLogout = () => {
    router.replace("/");
  };

  const logout = (slug, text) => {
    if (slug === "logout") {
      return (
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={handleLogout}
          variant="body"
        >
          {text}
        </Typography>
      );
    } else {
      return "";
    }
  };

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
        {logout(slug, text)}
        {slug !== "logout" && <Link href={`?tab=${slug}`}>{text}</Link>}
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
