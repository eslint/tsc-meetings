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
<<<<<<< HEAD
	},
||||||| %s
	}
=======
	}, {
        ignores: ["scripts/discord-transcript-generator.js"] // Adopted file
    }
>>>>>>> d1b8217 (chore: ignore discord-transcript-generator for ESLint)
]);
