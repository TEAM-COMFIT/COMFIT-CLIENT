// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import typescriptParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import react from "eslint-plugin-react";

export default defineConfig([
  { ignores: ["dist", "node_modules", "build", "*.config.js", "*.config.ts"] },

  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.app.json",
        },
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-var": "error", // var 금지
      "no-console": ["warn", { allow: ["warn", "error"] }], // console.log 경고

      "no-unused-vars": "off", // ts 룰로 대체함
      "@typescript-eslint/no-unused-vars": [
        // 사용하지 않는 변수 경고
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/consistent-type-imports": [
        // type import 사용 권장
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/no-explicit-any": "warn", // any 사용 경고
      "@typescript-eslint/no-non-null-assertion": "warn", // non-null assertion 경고

      "react-hooks/rules-of-hooks": "error", // Hooks 규칙 준수
      "react-hooks/exhaustive-deps": "warn", // useEffect 의존성 배열 검사

      // 화살표 함수 컴포넌트 사용 권장
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
        },
      ],
      // import 정렬 order 설정
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/first": "error", // import문 최상단 위치
      "import/no-duplicates": "error", // 중복 import 금지
      "import/no-unresolved": "off", // TS resolver가 처리
      "import/default": "off", // default export 불필요한 경고 제거
      "import/prefer-default-export": "off", // named export 사용(최적화 관점)

      // Prettier와 충돌 방지
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  },
  eslintConfigPrettier,
]);
