module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'color-hex-case': null,
    'no-descending-specificity': null,
    'function-comma-space-after': 'never',
    'block-opening-brace-space-before': 'never',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': null,
    'selector-combinator-space-after': 'never',
    'selector-combinator-space-before': 'never',
  },
  "ignoreFiles": [
    "bin/*",
    "scripts/*",
    "node_modules/*",
    "dist/*",
    "build/*",
    "**/*.js",
    "**/*.jsx"
  ]
}
