import React from "react";
import { Metadata } from "next";

import { App } from "@components/App";
import { Layout } from "@components/Layout";

import { ApolloWrapper } from "@lib/apollo-provider";

import "./globals.css";

export const metadata: Metadata = {
    title: {
        default: "CabinetJS",
        template: "%s - CabinetJS",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ApolloWrapper>
                    <App>
                        <Layout>{children}</Layout>
                    </App>
                </ApolloWrapper>
            </body>
        </html>
    );
}
