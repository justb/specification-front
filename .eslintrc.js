module.exports = {
    extends: ['eslint:recommended', 'prettier/react', 'react-app'], //eslint-config-prettier开发依赖eslint-plugin-prettier,eslint-plugin-react,babel-eslint,prettier...，所以这些还是需要正常安装的，npm不会安装包的开发依赖
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    parser: 'babel-eslint',
    env: {
        browser: true,
        jquery: true,
        node: true,
        mocha: true,
        es6: true
    },
    globals: {
        zhuge: true,
        getModule: true,
        log: true,
        wx: true
    },
    rules: {
        'prettier/prettier': [
            //权重最高
            'error',
            {
                singleQuote: true,
                semi: false,
                printWidth: 160,
                tabWidth: 4,
                jsxBracketSameLine: true
            }
        ],
        "jsx-a11y/alt-text": 0,
        'jsx-a11y/anchor-is-valid': 0,
        "jsx-a11y/href-no-hash": 0,
        'no-console': 1,
        'no-debugger': 1,
        'no-unused-expressions': 1,
        'no-case-declarations': 1,
        'no-unused-vars': 1,
        "max-len": [  //只会提示错误，不能进行分行
            "error",
            { code: 160, tabWidth: 4, ignoreTemplateLiterals: true }
        ],
        'max-lines': [1, {"skipComments": true}],
        'prefer-arrow-callback': 1,
        // semi: [2, 'always'],
        strict: 0,
        'default-case': 2,
        // indent: [2, 4, { SwitchCase: 1 }], //这里加上switch rules防止和prettier发生冲突
        'no-multi-spaces': [
            1,
            {
                exceptions: {
                    VariableDeclarator: true,
                    FunctionExpression: true
                }
            }
        ],
        'key-spacing': [
            0,
            {
                align: 'value'
            }
        ],
        'no-underscore-dangle': 0
    },
    plugins: ['react', 'prettier']
}
