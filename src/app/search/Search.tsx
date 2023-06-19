"use client";

import React from "react";

import { gql, useSuspenseQuery } from "@apollo/client";

const query = gql`
    query {
        launchLatest {
            mission_name
        }
    }
`;

export interface SearchProps {}

export function Search({}: SearchProps) {
    const { data } = useSuspenseQuery(query);

    return <div>{data.launchLatest.mission_name}</div>;
}
