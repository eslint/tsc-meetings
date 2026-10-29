"use strict";

const { defineConfig } = require("eslint/config");
const eslintConfigESLint = require("eslint-config-eslint/cjs");

module.exports = defineConfig([
	eslintConfigESLint,
	{
		files: ["scripts/**/*.js"],
		rules: {
			"no-console": "off",
		},
	},
	{
		// eslint-config-eslint/cjs sets `sourceType: "commonjs"` for all files
		files: ["**/*.mjs"],
		languageOptions: {
			sourceType: "module",
		},
	},
]);
