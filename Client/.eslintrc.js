module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": 2,
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/indent": ["error", 2],
    quotes: [2, "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
