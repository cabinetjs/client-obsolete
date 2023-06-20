"use client";

import React from "react";

import { Grid } from "@mui/material";

import { DataSourceCard } from "@components/DataSourceCard";

import { useDataSourcesSuspenseQuery } from "@queries";

export interface DataSourcesProps {}

export function DataSources({}: DataSourcesProps) {
    const { data } = useDataSourcesSuspenseQuery();

    console.log(data);

    return (
        <Grid container spacing={2}>
            {data.dataSources.map(item => (
                <Grid item key={item.id} xs={4}>
                    <DataSourceCard dataSource={item} />
                </Grid>
            ))}
        </Grid>
    );
}
