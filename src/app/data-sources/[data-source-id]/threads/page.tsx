import { DataSourceThreads } from "@/app/data-sources/[data-source-id]/threads/DataSourceThreads";

export const dynamic = "force-dynamic";

export default function Page({ params }: { params: Record<string, string> }) {
    const dataSourceId = params["data-source-id"];
    if (!dataSourceId) {
        throw new Error("Missing data source ID.");
    }

    return <DataSourceThreads dataSourceId={dataSourceId} />;
}
