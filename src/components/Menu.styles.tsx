import styled from "@emotion/styled";

import { ButtonBase } from "@mui/material";

export const Root = styled.div`
    padding: 0;

    svg {
        font-size: 20px;

        display: block;

        opacity: 0.65;
    }
`;

export const Label = styled.span`
    opacity: 0.65;
`;

export const Icon = styled.span`
    min-width: 0;

    margin-right: ${({ theme }) => theme.spacing(1.5)};

    display: block;
`;

export const Wrapper = styled.div`
    &:not(:first-of-type) {
        margin-top: ${({ theme }) => theme.spacing(2)};
    }
`;

export const ListTitle = styled.p`
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0, 1, 1)};

    opacity: 0.65;
`;

export const Item = styled(ButtonBase, { shouldForwardProp: prop => prop !== "active" })<{
    active: boolean;
}>`
    width: 100%;

    height: ${({ theme }) => theme.spacing(4.5)};

    padding: ${({ theme }) => theme.spacing(0, 1.5)};
    border-radius: 4px;

    display: flex;
    justify-content: flex-start;

    background-color: ${({ active }) => (active ? "rgba(255, 255, 255, 0.08)" : "transparent")};

    &:not(:last-child) {
        margin: ${({ theme }) => theme.spacing(0, 0, 0.5)};
    }

    &:hover,
    &:focus-visible {
        background-color: rgba(255, 255, 255, 0.08);
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.palette.primary.main};
    }

    .MuiTypography-root,
    svg {
        opacity: ${({ active }) => (active ? 1 : 0.65)};
    }

    svg {
        color: ${({ theme, active }) => (active ? theme.palette.primary.main : theme.palette.text.primary)};
    }
`;
