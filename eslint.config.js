import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  pluginReact.configs.flat.recommended, // ← load FIRST
  {
    files: ["src/**/*.{js,mjs,cjs,jsx}"],
    ...js.configs.recommended,

    languageOptions: {
      globals: {
        ...globals.browser,
      }
    },

    plugins: {
      "react-hooks": pluginReactHooks,
      react: pluginReact
    },

    settings: {
      react: {
        version: "18.2",
      },
    },

    rules: {
      ...pluginReactHooks.configs.recommended.rules,

  
      "react/react-in-jsx-scope": "off"
    }
  },

  eslintConfigPrettier
];
