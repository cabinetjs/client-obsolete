"use client";

import React from "react";

import { Grid } from "@mui/material";

import { DataSourceCard } from "@components/DataSourceCard";

export default function Loading() {
    return (
        <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, index) => (
                <Grid item key={index} xs={4}>
                    <DataSourceCard skeleton />
                </Grid>
            ))}
        </Grid>
    );
}
