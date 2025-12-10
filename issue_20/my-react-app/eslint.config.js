// eslint.config.js or eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    extends: [
      js.configs.recommended, // Base JS rules
      pluginReact.configs.flat.recommended, // React rules
    ],
    rules: {
      // React 17+ doesn't need "import React from 'react';"
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Ask ESLint to show Prettier formatting problems as errors
      "prettier/prettier": "error",
    },
  },

  // Extra config for test files so Vitest globals (test, expect, describe) are not flagged
  {
    files: ["**/*.test.{js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
  },
]);
