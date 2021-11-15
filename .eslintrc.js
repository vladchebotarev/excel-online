module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
    'operator-linebreak': 'off',
    'no-trailing-spaces': 'off',
    'indent': ['error', 2, {'MemberExpression': 1}]
  },
  extends: [
    'eslint:recommended',
    'google'
  ]
}
