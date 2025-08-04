import globals from "globals";

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import tanstackRouter from "@tanstack/eslint-plugin-router";

import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import unusedImports from "eslint-plugin-unused-imports";

import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Put `globalIgnores` first to prevent ESLint from running on these files.

  globalIgnores(["**/node_modules", "**/dist"]),

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Plugins.

  eslint.configs.recommended,
  tseslint.configs.recommended,

  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.recommended,

  tanstackRouter.configs["flat/recommended"],

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Project-wide config.

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      react: react,
      "react-refresh": reactRefresh,
      "@tanstack/router": tanstackRouter,
      "no-relative-import-paths": noRelativeImportPaths,
      "unused-imports": unusedImports,
    },

    settings: {
      react: { version: "detect" },
    },

    rules: {
      // Typescript
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Unused variables
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // Imports
      "unused-imports/no-unused-imports": "warn",
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        {
          allowSameFolder: true,
          allowedDepth: 1,
          rootDir: "src",
          prefix: "@",
        },
      ],

      // React
      "react/prop-types": "off",
      "react-hooks/react-compiler": "error",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // TanStack Router
      "@tanstack/router/create-route-property-order": "error",
    },
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Disable `react-refresh/only-export-components` for shadcn components that export `*Variants` style functions.

  {
    files: ["**/ui/badge.tsx", "**/ui/button.tsx", "**/ui/navigation-menu.tsx", "**/ui/tabs.tsx"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Always last.

  prettierRecommended,
);
