"use strict";

module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "curly": 2,
        "radix": 2,
		"vars-on-top": 2,
		"wrap-iife": 2,
        "max-len": [2, { "code": 120, "ignoreUrls": true }]
    }
};