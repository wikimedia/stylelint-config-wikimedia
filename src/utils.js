'use strict';

function deepCopy( obj ) {
	// Use structuredClone in the future.
	return JSON.parse( JSON.stringify( obj ) );
}

function getBasicOverrides() {
	return deepCopy( require( '../index' ).overrides );
}

/**
 * Deep-extend any overrides which use postcss-less to ignore
 * 'css-nesting' in stylelint-no-unsupported-browser-features
 *
 * @param {Object} overrides
 * @param {Object} noUnsupportedBrowserFeatures
 */
function extendNoUnsupportedBrowserFeaturesLess( overrides, noUnsupportedBrowserFeatures ) {
	const noUnsupportedBrowserFeaturesLess = deepCopy( noUnsupportedBrowserFeatures );
	noUnsupportedBrowserFeaturesLess[ 1 ].ignore =
		noUnsupportedBrowserFeaturesLess[ 1 ].ignore || [];
	noUnsupportedBrowserFeaturesLess[ 1 ].ignore.push( 'css-nesting' );

	overrides.forEach( ( override ) => {
		if ( override.customSyntax === 'postcss-less' ) {
			override.plugins = override.plugins || [];
			override.plugins.push( 'stylelint-no-unsupported-browser-features' );
			override.rules = override.rules || {};
			Object.assign(
				override.rules,
				{
					'plugin/no-unsupported-browser-features': noUnsupportedBrowserFeaturesLess
				}
			);
		}
	} );
}

module.exports = {
	extendNoUnsupportedBrowserFeaturesLess,
	getBasicOverrides
};
