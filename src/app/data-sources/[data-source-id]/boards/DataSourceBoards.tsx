"use client";

import React from "react";

import { Box } from "@mui/material";

import { Card } from "@components/Card";

import { useDataSourceBoardsSuspenseQuery } from "@queries";
import { getThumbnailUrl } from "@utils/attachment";

export interface DataSourceBoardsProps {
    dataSourceId: string;
}

export function DataSourceBoards({ dataSourceId }: DataSourceBoardsProps) {
    const {
        data: { dataSource },
    } = useDataSourceBoardsSuspenseQuery({
        variables: { name: dataSourceId },
    });

    if (!dataSource) {
        throw new Error("Data Source with the given name does not exist.");
    }

    return (
        <Box display="flex" flexWrap="wrap">
            {dataSource.boards.map(item => (
                <Card
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    mediaCount={item.mediaCount}
                    postCount={item.postCount}
                    thumbnail={getThumbnailUrl(item.latestAttachment, 320, 180)}
                />
            ))}
        </Box>
    );
}
