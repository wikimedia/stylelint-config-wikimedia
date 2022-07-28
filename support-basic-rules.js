'use strict';

/* eslint-disable quotes, quote-props */
module.exports = {
	"plugins": [
		"stylelint-no-unsupported-browser-features"
	],
	"rules": {
		"plugin/no-unsupported-browser-features": [ true, {
			"browsers": require( 'browserslist-config-wikimedia/basic' ),
			"severity": "warning",
			"ignorePartialSupport": true
		} ],
		// Must remain enabled as long as some of our "basic" browsers don't support https://caniuse.com/css-not-sel-list
		"selector-not-notation": "simple"
	},
	"overrides": [
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
