import React from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { MenuItem } from "@components/Menu";

export const NAV_MENU_ITEMS: MenuItem[] = [
    {
        label: "Home",
        icon: <HomeOutlinedIcon />,
        href: "/",
    },
    {
        label: "Search",
        icon: <SearchRoundedIcon />,
        href: "/search",
    },
    {
        label: "Data Sources",
        icon: <FolderCopyOutlinedIcon />,
        href: "/data-sources",
    },
];

export const NAV_MENU_ITEMS_ADMIN: MenuItem[] = [
    {
        label: "Home",
        icon: <HomeRoundedIcon />,
        href: "/",
    },
];
