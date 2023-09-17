module.exports = {
  root: true,
  env: {
    "node": true,
    "browser": true,
    "commonjs": true,
      "es6": true
  },
  globals: {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "process": true
  },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // "parser": "@babel/eslint-parser"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
