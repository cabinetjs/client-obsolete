"use client";

import { ReactNode } from "react";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { RecoilRoot } from "recoil";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@styles/theme";

type Props = {
    children: ReactNode;
};

export const App = ({ children }: Props) => {
    return (
        <RecoilRoot>
            <CssBaseline />
            <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </NextAppDirEmotionCacheProvider>
        </RecoilRoot>
    );
};
