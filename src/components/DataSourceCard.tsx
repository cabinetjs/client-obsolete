import React from "react";

import { Box, Skeleton, Tooltip, Typography } from "@mui/material";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";

import { ImageWrapper, Root, Tag, TagContainer, Thumbnail } from "@components/DataSourceCard.styles";

import { MinimalDataSourceFragment } from "@queries";
import { getThumbnailUrl } from "@utils/attachment";

export interface NormalCardProps {
    dataSource: MinimalDataSourceFragment;
}

export interface SkeletonCardProps {
    skeleton: boolean;
}

export type CardProps = NormalCardProps | SkeletonCardProps;

export function DataSourceCard(props: CardProps) {
    let id: React.ReactNode;
    let type: React.ReactNode;
    let tags: React.ReactNode;
    let thumbnail: React.ReactNode;

    if ("skeleton" in props) {
        id = <Skeleton variant="text" width="100%" animation="wave" />;
        type = <Skeleton variant="text" width="100%" animation="wave" />;
        tags = <Skeleton variant="text" width="50%" animation="wave" />;
        thumbnail = <Skeleton variant="rectangular" height="100%" animation="wave" />;
    } else {
        const { dataSource } = props;

        id = dataSource.id;
        type = dataSource.type;
        tags = (
            <>
                <Tooltip title="게시글 개수">
                    <Tag>
                        <QuestionAnswerRoundedIcon fontSize="small" color="inherit" />
                        <Typography variant="body2" fontSize="0.8rem" fontWeight={600}>
                            {dataSource.postCount}
                        </Typography>
                    </Tag>
                </Tooltip>
                <Tooltip title="미디어 개수">
                    <Tag>
                        <ImageRoundedIcon fontSize="small" color="inherit" />
                        <Typography variant="body2" fontSize="0.8rem" fontWeight={600}>
                            {dataSource.mediaCount}
                        </Typography>
                    </Tag>
                </Tooltip>
            </>
        );

        if (dataSource.latestAttachment) {
            thumbnail = <Thumbnail />;
        }

        thumbnail = dataSource.latestAttachment ? (
            <Thumbnail style={{ backgroundImage: `url(${getThumbnailUrl(dataSource.latestAttachment, 320, 180)})` }} />
        ) : null;
    }

    return (
        <Root>
            <ImageWrapper>{thumbnail}</ImageWrapper>
            <Box p={1.5}>
                <Typography variant="h6" fontSize="1rem" fontWeight={800} gutterBottom>
                    {id}
                </Typography>
                <Typography variant="body1" fontSize="0.85rem">
                    {type}
                </Typography>
            </Box>
            <TagContainer>
                <Box flex="1 1 auto" />
                {tags}
            </TagContainer>
        </Root>
    );
}
