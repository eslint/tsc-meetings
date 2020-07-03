"use strict";

module.exports = {
    root: true,
    extends: [
        "eslint"
    ],
    parserOptions: {
        ecmaVersion: 8
    },
    env: {
        node: true,
        es6: true
    },
    rules: {
        "no-console": "off"
    }
};
