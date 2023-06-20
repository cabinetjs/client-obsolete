"use client";

import React from "react";

import { Box } from "@mui/material";

import { Card } from "@components/Card";

export default function Loading() {
    return (
        <Box display="flex" flexWrap="wrap">
            {Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} skeleton />
            ))}
        </Box>
    );
}
