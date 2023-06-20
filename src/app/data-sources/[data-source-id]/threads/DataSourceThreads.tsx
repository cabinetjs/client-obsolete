"use client";

import React from "react";

import { Box } from "@mui/material";

import { Card } from "@components/Card";

import { useDataSourceThreadsSuspenseQuery } from "@queries";
import { getThumbnailUrl } from "@utils/attachment";

export interface DataSourceThreadsProps {
    dataSourceId: string;
}

export function DataSourceThreads({ dataSourceId }: DataSourceThreadsProps) {
    const {
        data: { dataSource },
    } = useDataSourceThreadsSuspenseQuery({
        variables: { name: dataSourceId },
    });

    if (!dataSource) {
        throw new Error("Data Source with the given name does not exist.");
    }

    return (
        <Box display="flex" flexWrap="wrap">
            {dataSource.threads.map(item => (
                <Card
                    key={item.id}
                    title={item.title || `Thread #${item.no}`}
                    description={item.content || ""}
                    mediaCount={item.attachmentCount}
                    postCount={item.replyCount + 1}
                    thumbnail={getThumbnailUrl(item.attachments[0], 320, 180)}
                />
            ))}
        </Box>
    );
}
