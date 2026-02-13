'use strict';

/* eslint-disable quotes, quote-props */
module.exports = {
	"plugins": "./rules/no-at-import-css.mjs",
	"rules": {
		// MediaWiki will only support import in Less files.
		"at-rule-disallowed-list": "import",
		// See https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS
		"selector-class-pattern": "^(ext|mw|oo-ui|cdx|client|skin)-"
	},
	"overrides": [
		{
			"files": [ "**/*.less" ],
			"customSyntax": "postcss-less",
			"plugins": [
				"./rules/no-darkmode-override.js"
			],
			"rules": {
				// MediaWiki will only support @import in Less files.
				"at-rule-disallowed-list": null,
				// Don't allow CSS imports.
				"wikimedia/no-at-import-css": true,
				"wikimedia/no-darkmode-override": [
					true,
					{ "severity": "warning" }
				]
			}
		},
		{
			"files": [ "**/*.vue" ],
			"customSyntax": "postcss-less",
			"rules": {
				// MediaWiki will only support @import in Less files.
				"at-rule-disallowed-list": null,
				// Don't allow CSS imports.
				"wikimedia/no-at-import-css": true
			}
		},
		{
			"files": [ "**/*.vue" ],
			"customSyntax": "postcss-html"
		}
	]
};
