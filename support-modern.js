'use strict';

/* eslint-disable quotes, quote-props */
module.exports = {
	"plugins": [
		"stylelint-no-unsupported-browser-features"
	],
	"extends": "./index",
	"rules": {
		"plugin/no-unsupported-browser-features": [ true, {
			"browsers": require( 'browserslist-config-wikimedia/modern' ),
			"severity": "warning",
			"ignorePartialSupport": true
		} ]
	}
};
