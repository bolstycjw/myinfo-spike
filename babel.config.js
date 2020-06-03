module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" }, modules: "cjs" }], "@babel/preset-typescript"],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-class-properties", { loose: false }]
  ]
};
