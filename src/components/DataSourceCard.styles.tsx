import styled from "@emotion/styled";

import { ButtonBase } from "@mui/material";

export const Root = styled(ButtonBase)`
    width: 100%;

    margin: 0;
    border-radius: 4px;

    display: block;
    text-align: left;

    overflow: hidden;

    background: ${({ theme }) => theme.palette.background.paper};

    box-shadow: ${({ theme }) => theme.shadows[2]};
    transition: ${({ theme }) =>
        theme.transitions.create("box-shadow", {
            duration: theme.transitions.duration.shortest,
        })};

    &:hover,
    &:focus-visible {
        box-shadow: ${({ theme }) => theme.shadows[8]};
    }

    &:active {
        box-shadow: ${({ theme }) => theme.shadows[4]};
    }
`;

export const TagContainer = styled.div`
    border-top: 1px solid ${({ theme }) => theme.palette.divider};

    padding: ${({ theme }) => theme.spacing(1.5)};

    display: flex;
    justify-content: flex-end;
`;

export const Tag = styled.div`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.palette.text.secondary};

    > svg {
        width: ${({ theme }) => theme.spacing(2)};
        height: ${({ theme }) => theme.spacing(2)};

        margin-right: ${({ theme }) => theme.spacing(0.5)};

        display: block;

        opacity: 0.65;
    }

    &:not(:last-of-type) {
        margin-right: ${({ theme }) => theme.spacing(1)};
    }
`;

export const ImageWrapper = styled.div`
    aspect-ratio: 16 / 9;
`;

export const Thumbnail = styled.div`
    width: 100%;
    height: 100%;

    display: block;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
