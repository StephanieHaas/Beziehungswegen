module.exports = {
    extends: ["@ouc/eslint-config"],
    root: true,
    ignorePatterns: [".eslintrc.js"],
    overrides: [
        {
            files: ["*.ts", "*.tsx", "./utils/sftp.js"],
            ignorePatterns: ["postcss.config.js"],
            processor: "@graphql-eslint/graphql",
            parser: "@typescript-eslint/parser",
            extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
            env: {
                es6: true,
            },
        },
        {
            files: ["*.graphql"],
            parser: "@graphql-eslint/eslint-plugin",
            plugins: ["@graphql-eslint"],
            rules: {
                "@graphql-eslint/no-anonymous-operations": "error",
                "@graphql-eslint/naming-convention": [
                    "error",
                    {
                        OperationDefinition: {
                            style: "PascalCase",
                            forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
                            forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
                        },
                    },
                ],
            },
        },
    ],
};
