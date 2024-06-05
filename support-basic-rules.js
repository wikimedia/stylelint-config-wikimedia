'use strict';

const utils = require( './src/utils' );
const overrides = utils.getBasicOverrides();

/* eslint-disable quotes, quote-props */
const noUnsupportedBrowserFeatures = [ true, {
	"browsers": require( 'browserslist-config-wikimedia/basic' ),
	"severity": "warning",
	"ignore": [ "css-not-sel-list" ],
	"ignorePartialSupport": true
} ];

utils.extendNoUnsupportedBrowserFeaturesLess( overrides, noUnsupportedBrowserFeatures );

module.exports = {
	"plugins": [
		"stylelint-no-unsupported-browser-features"
	],
	"rules": {
		"plugin/no-unsupported-browser-features": noUnsupportedBrowserFeatures,
		// Must remain enabled as long as some of our "basic" browsers don't support https://caniuse.com/css-not-sel-list
		"selector-not-notation": "simple"
	},
	overrides
};
