"use strict";

const { defineConfig } = require("eslint/config");
const eslintConfigESLint = require("eslint-config-eslint/cjs")

module.exports = defineConfig([
    eslintConfigESLint,
    {
        files: ["scripts/**/*.js"],
        rules: {
            "no-console": "off",
        }
    }
]);
