"use client";

import React from "react";

import { Box, Toolbar } from "@mui/material";

import { AppBar } from "@components/AppBar";
import { SideBar } from "@components/SideBar";

export interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <Box display="flex">
            <AppBar />
            <SideBar />
            <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
