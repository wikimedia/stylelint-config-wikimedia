'use strict';

/* eslint-disable quotes, quote-props */
module.exports = {
	"plugins": "./rules/no-at-import-css.js",
	"rules": {
		// MediaWiki will only support import in LESS files
		"at-rule-disallowed-list": "import",
		// See https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS
		"selector-class-pattern": "^(ext|mw|oo-ui|cdx|client|skin)-"
	},
	"overrides": [
		{
			"files": [ "**/*.less" ],
			"customSyntax": "postcss-less",
			"rules": {
			// MediaWiki will only support @import in LESS files
				"at-rule-disallowed-list": null,
				// Don't allow CSS imports
				"wikimedia/no-at-import-css": true
			}
		},
		{
			"files": [ "**/*.vue" ],
			"customSyntax": "postcss-less"
		},
		{
			"files": [ "**/*.vue" ],
			"customSyntax": "postcss-html"
		}
	]
};
