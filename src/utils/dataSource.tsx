import React from "react";

import { MenuItem } from "@components/Menu";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

import { MinimalDataSourceFragment } from "@queries";

export function buildMenuItems(dataSources: MinimalDataSourceFragment[]): MenuItem[] {
    return dataSources.map(dataSource => ({
        label: dataSource.id,
        activated: pathname => pathname.startsWith(`/data-sources/${dataSource.id}`),
        icon: <FolderOutlinedIcon />,
        children: [
            {
                label: "Boards",
                href: `/data-sources/${dataSource.id}/boards`,
                activated: pathname => pathname.startsWith(`/data-sources/${dataSource.id}/boards`),
            },
            {
                label: "Threads",
                href: `/data-sources/${dataSource.id}/threads`,
                activated: pathname => pathname.startsWith(`/data-sources/${dataSource.id}/threads`),
            },
        ],
    }));
}
