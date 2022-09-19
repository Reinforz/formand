module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "no-multiple-empty-lines": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/semi": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/comma-dangle": "off",
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off"
  },
};
