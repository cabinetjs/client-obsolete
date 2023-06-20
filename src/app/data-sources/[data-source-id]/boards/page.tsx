import { DataSourceBoards } from "@/app/data-sources/[data-source-id]/boards/DataSourceBoards";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: Record<string, string> }) {
    const dataSourceId = params["data-source-id"];
    if (!dataSourceId) {
        throw new Error("Missing data source ID.");
    }

    return <DataSourceBoards dataSourceId={dataSourceId} />;
}
