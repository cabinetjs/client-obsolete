"use client";

import React from "react";

import { Box, ThemeProvider, Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import { Menu, MenuItem } from "@components/Menu";

import { NAV_MENU_ITEMS } from "@constants/nav";
import { sideBarTheme } from "@styles/theme";

import { Logo, Root, TitleBar } from "@components/SideBar.styles";

import { useDataSourcesQuery } from "@queries";

export interface SideBarProps {}

export function SideBar({}: SideBarProps) {
    const { data } = useDataSourcesQuery();
    const [dataSourceMenuItems, setDataSourceMenuItems] = React.useState<MenuItem[]>([]);

    React.useEffect(() => {
        if (!data) {
            return;
        }

        setDataSourceMenuItems(
            data.dataSources.map(item => ({
                label: item.id,
                href: `/data-sources/${item.id}`,
                icon: <FolderOutlinedIcon />,
            })),
        );
    }, [data]);

    return (
        <ThemeProvider theme={sideBarTheme}>
            <Root variant="permanent" anchor="left">
                <TitleBar>
                    <Box width="100%" px={2.5} display="flex" alignItems="center">
                        <Logo />
                        <Typography variant="h6" fontSize="1rem" lineHeight={1} noWrap component="div">
                            CabinetJS
                        </Typography>
                    </Box>
                </TitleBar>
                <Box p={1.5}>
                    <Menu items={NAV_MENU_ITEMS} />
                    <Menu title="Data Sources" items={dataSourceMenuItems} />
                </Box>
            </Root>
        </ThemeProvider>
    );
}
