'use strict';

/* eslint-disable quotes, quote-props */
module.exports = {
	"plugins": [
		"./rules/no-at-import-css.mjs",
		"./rules/selector-class-prefix.js"
	],
	"rules": {
		// MediaWiki will only support import in Less files.
		"at-rule-disallowed-list": "import",
		// See https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS
		// Use wikimedia/selector-class-prefix instead, which can be extended
		// with additionalPrefixes.
		"selector-class-pattern": null,
		"wikimedia/selector-class-prefix": true
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
