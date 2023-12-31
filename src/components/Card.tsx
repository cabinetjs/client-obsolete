import React from "react";
import { stripHtml } from "string-strip-html";

import { Box, Skeleton, Tooltip, Typography } from "@mui/material";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";

import { Description, ImageWrapper, Root, Tag, TagContainer, Thumbnail, Title } from "@components/Card.styles";

import { Nullable } from "@utils/types";

export interface NormalCardProps {
    title: string;
    description: string;
    thumbnail?: Nullable<string>;
    mediaCount: number;
    postCount: number;
}

export interface SkeletonCardProps {
    skeleton: boolean;
}

export type CardProps = NormalCardProps | SkeletonCardProps;

export function Card(props: CardProps) {
    let title: React.ReactNode;
    let description: React.ReactNode;
    let tags: React.ReactNode;
    let thumbnail: React.ReactNode;

    if ("skeleton" in props) {
        title = <Skeleton variant="text" width="100%" animation="wave" />;
        description = <Skeleton variant="text" width="100%" animation="wave" />;
        tags = <Skeleton variant="text" width="50%" animation="wave" />;
        thumbnail = <Skeleton variant="rectangular" height="100%" animation="wave" />;
    } else {
        title = props.title;
        description = stripHtml(props.description).result;
        tags = (
            <>
                <Tooltip title="게시글 개수">
                    <Tag>
                        <QuestionAnswerRoundedIcon fontSize="small" color="inherit" />
                        <Typography variant="body2" fontSize="0.8rem" fontWeight={600}>
                            {props.postCount}
                        </Typography>
                    </Tag>
                </Tooltip>
                <Tooltip title="미디어 개수">
                    <Tag>
                        <ImageRoundedIcon fontSize="small" color="inherit" />
                        <Typography variant="body2" fontSize="0.8rem" fontWeight={600}>
                            {props.mediaCount}
                        </Typography>
                    </Tag>
                </Tooltip>
            </>
        );

        if (props.thumbnail) {
            thumbnail = <Thumbnail style={{ backgroundImage: `url(${props.thumbnail})` }} />;
        }
    }

    return (
        <Root>
            <ImageWrapper>{thumbnail}</ImageWrapper>
            <Box p={1.5} flex="1 1 auto">
                <Typography component={Title} variant="h6" fontSize="1rem" fontWeight={800} gutterBottom>
                    {title}
                </Typography>
                <Typography component={Description} variant="body1" fontSize="0.85rem">
                    {description}
                </Typography>
            </Box>
            <TagContainer>
                <Box flex="1 1 auto" />
                {tags}
            </TagContainer>
        </Root>
    );
}
