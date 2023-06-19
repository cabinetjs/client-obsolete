"use client";

import React from "react";

import styled from "@emotion/styled";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

import { SIDEBAR_WIDTH } from "@constants/layout";

export interface AppBarProps {}

const Root = styled(MuiAppBar)`
    width: calc(100% - ${SIDEBAR_WIDTH}px);

    margin-left: ${SIDEBAR_WIDTH}px;
`;

export function AppBar({}: AppBarProps) {
    return (
        <Root position="fixed" elevation={0} color="inherit">
            <Toolbar />
        </Root>
    );
}
