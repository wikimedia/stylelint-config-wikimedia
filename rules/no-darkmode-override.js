/**
 * Disallows the mixin `.darkmode-override(...)`.
 *
 * This mixin should only be used as a last resort, so this rule gives
 * a warning and links to specific documentation on best practices.
 */

'use strict';

const stylelint = require( 'stylelint' );

const { report, ruleMessages, validateOptions } = stylelint.utils;

const ruleName = 'wikimedia/no-darkmode-override';

const messages = ruleMessages( ruleName, {
	rejected: '.darkmode-override should only be used as a last resort, prefer design tokens instead. See https://w.wiki/LApq for best practices.'
} );

module.exports = stylelint.createPlugin(
	ruleName,
	( primaryOption ) => ( postcssRoot, postcssResult ) => {
		const validOptions = validateOptions( postcssResult, ruleName, {
			actual: primaryOption,
			possible: [ true ]
		} );
		if ( !validOptions ) {
			return;
		}

		postcssRoot.walkAtRules( ( atRule ) => {
			if ( atRule.name !== 'darkmode-override' ) {
				return;
			}

			report( {
				message: messages.rejected,
				node: atRule,
				ruleName,
				result: postcssResult,
				word: '.darkmode-override'
			} );
		} );
	}
);

module.exports.ruleName = ruleName;
module.exports.messages = messages;
