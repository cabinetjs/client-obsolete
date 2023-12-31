"use client";

import React from "react";

import { Grid } from "@mui/material";

import { Card } from "@components/Card";

export default function Loading() {
    return (
        <Grid container spacing={2}>
            {Array.from({ length: 6 }).map((_, index) => (
                <Grid item key={index} xs={4}>
                    <Card skeleton />
                </Grid>
            ))}
        </Grid>
    );
}
