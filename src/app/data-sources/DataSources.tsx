"use client";

import React from "react";

import { Box } from "@mui/material";

import { Card } from "@components/Card";

import { useDataSourcesSuspenseQuery } from "@queries";
import { getThumbnailUrl } from "@utils/attachment";

export interface DataSourcesProps {}

export function DataSources({}: DataSourcesProps) {
    const { data } = useDataSourcesSuspenseQuery();

    return (
        <Box display="flex" flexWrap="wrap">
            {data.dataSources.map(item => (
                <Card
                    key={item.id}
                    title={item.id}
                    description={item.type}
                    postCount={item.postCount}
                    mediaCount={item.mediaCount}
                    thumbnail={getThumbnailUrl(item.latestAttachment, 320, 180)}
                />
            ))}
        </Box>
    );
}
