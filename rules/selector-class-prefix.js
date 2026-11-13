/**
 * Requires class selectors to start with a known prefix.
 *
 * Wraps the core `selector-class-pattern` rule with a pattern built from
 * the core MediaWiki prefixes plus any `additionalPrefixes` given, so
 * downstream configs can extend the list without restating it. Core prefixes
 * listed in `removePrefixes` are not allowed. For example, an extension can
 * remove `ext` and add `ext-<extensionName>`, so that it only uses its own prefix.
 * Class names which match any of the regular expressions in
 * `additionalPatterns` are also allowed.
 *
 * See https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS
 */

'use strict';

const stylelint = require( 'stylelint' );

const { checkAgainstRule, report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'wikimedia/selector-class-prefix';

const corePrefixes = [ 'ext', 'mw', 'oo-ui', 'cdx', 'client', 'skin' ];

const messages = ruleMessages( ruleName, {
	expected: ( selector, prefixes, patterns ) => `Expected "${ selector }" to start with one of: ${ prefixes.map( ( prefix ) => prefix + '-' ).join( ', ' ) }` +
		( patterns.length ? ` or match one of: ${ patterns.map( ( p ) => `/${ p }/` ).join( ', ' ) }` : '' )
} );

function escapeRegExp( str ) {
	return str.replace( /[.*+?^${}()|[\]\\]/g, '\\$&' );
}

function isString( value ) {
	return typeof value === 'string';
}

module.exports = stylelint.createPlugin(
	ruleName,
	( primaryOption, secondaryOptions ) => async ( postcssRoot, postcssResult ) => {
		const validOptions = validateOptions(
			postcssResult,
			ruleName,
			{
				actual: primaryOption,
				possible: [ true ]
			},
			{
				actual: secondaryOptions,
				possible: {
					additionalPrefixes: [ isString ],
					additionalPatterns: [ isString ],
					removePrefixes: [ isString ]
				},
				optional: true
			}
		);
		if ( !validOptions ) {
			return;
		}

		const removePrefixes = ( secondaryOptions && secondaryOptions.removePrefixes ) || [];
		const prefixes = corePrefixes
			.filter( ( prefix ) => !removePrefixes.includes( prefix ) )
			.concat( ( secondaryOptions && secondaryOptions.additionalPrefixes ) || [] );
		const patterns = ( secondaryOptions && secondaryOptions.additionalPatterns ) || [];
		const pattern = [ `^(${ prefixes.map( escapeRegExp ).join( '|' ) })-` ]
			.concat( patterns.map( ( p ) => `(?:${ p })` ) )
			.join( '|' );

		await checkAgainstRule(
			{
				ruleName: 'selector-class-pattern',
				ruleSettings: pattern,
				root: postcssRoot,
				// Isolate from the core rule's disables and severity, so that only
				// this rule's own settings and disable comments apply.
				result: {
					stylelint: Object.assign( {}, postcssResult.stylelint, {
						disabledRanges: {},
						ruleSeverities: {}
					} )
				}
			},
			( warning ) => {
				const match = warning.text.match( /^Expected "(.+?)" to match pattern/ );
				report( {
					message: messages.expected,
					messageArgs: [ match ? match[ 1 ] : warning.text, prefixes, patterns ],
					node: warning.node,
					start: { line: warning.line, column: warning.column },
					end: { line: warning.endLine, column: warning.endColumn },
					ruleName,
					result: postcssResult
				} );
			}
		);
	}
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
module.exports.corePrefixes = corePrefixes;
