const { pascalCase } = require("change-case");

module.exports = {
    plugin(schema, documents) {
        let results = [];
        for (const { document } of documents) {
            for (const definition of document.definitions) {
                if (!(definition.kind === "OperationDefinition" && definition.operation === "query")) {
                    continue;
                }

                const { name } = definition;
                const queryName = pascalCase(name.value);
                const result = `
export function use${queryName}SuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<${queryName}Query, ${queryName}QueryVariables>) {
    const options = {...defaultOptions, ...baseOptions}
    return Apollo.useSuspenseQuery<${queryName}Query, ${queryName}QueryVariables>(${queryName}Document, options);
}
                `.trim();

                results.push(result);
            }
        }

        return results.join("\n\n");
    },
};
