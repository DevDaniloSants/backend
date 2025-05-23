import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    {
        ignores: ['node_modules', 'dist/**'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { js },
        extends: ['js/recommended'],
        rules: {
            'linebreak-style': ['error', 'unix'],
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    eslintConfigPrettier,
])
