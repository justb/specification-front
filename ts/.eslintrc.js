module.exports = {
    extends: ['prettier/react'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                printWidth: 160,
                trailingComma: 'all',
                tabWidth: 4,
                jsxBracketSameLine: true
            }
        ],
        'eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        "@typescript-eslint/class-name-casing": "error",
    }
}
