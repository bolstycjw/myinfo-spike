module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    es6: true
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off"
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"]
};
