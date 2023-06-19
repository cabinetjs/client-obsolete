"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Typography } from "@mui/material";

import { Icon, Item, Label, ListTitle, Root, Wrapper } from "@components/Menu.styles";

import { makeInternalArray } from "@utils/makeInternal";

export interface MenuItem {
    label: string;
    icon?: React.ReactNode;
    href?: string;
    activated?(pathname: string): boolean;
}

export interface MenuProps {
    title?: string;
    items: MenuItem[];
}

export function Menu(props: MenuProps) {
    const [items, setItems] = React.useState(makeInternalArray(props.items));
    const pathname = usePathname();

    React.useEffect(() => {
        setItems(makeInternalArray(props.items));
    }, [props.items]);

    return (
        <Wrapper>
            {props.title && (
                <Typography component={ListTitle} fontSize="0.75rem" fontWeight={600} textTransform="uppercase">
                    {props.title}
                </Typography>
            )}
            <Root>
                {items.map(item => {
                    const props = item.href ? { component: Link, href: item.href } : {};

                    return (
                        <Item
                            key={item.key}
                            role="button"
                            active={item.activated?.(pathname) ?? pathname === item.href}
                            {...props}
                        >
                            <Icon>{item.icon}</Icon>
                            <Typography component={Label} variant="body1" fontSize="0.875rem" fontWeight={600}>
                                {item.label}
                            </Typography>
                        </Item>
                    );
                })}
            </Root>
        </Wrapper>
    );
}
