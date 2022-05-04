/**
 * Disallows @import at-rules that aren't handled by the LESS complier
 */

'use strict';

const stylelint = require( 'stylelint' );
const path = require( 'path' );

const { report, validateOptions } = stylelint.utils;
const ruleName = 'wikimedia/no-at-import-css';

module.exports = stylelint.createPlugin(
	ruleName,
	function getPlugin() {
		return function lint( postcssRoot, postcssResult ) {
			const validOptions = validateOptions(
				postcssResult,
				ruleName,
				{}
			);
			if ( !validOptions ) {
				return;
			}
			postcssRoot.walkAtRules( ( atRule ) => {
				if ( atRule.name !== 'import' ) {
					return;
				}

				let filename = atRule.filename;

				if ( !filename ) {
					// Don't both catching complex CSS imports, like url(file.css)
					return;
				}

				function startAndEndsWith( char ) {
					return filename.slice( 0, 1 ) === char &&
						filename.slice( -1 ) === char;
				}

				// Remove quotes if present
				if ( startAndEndsWith( '\'' ) || startAndEndsWith( '"' ) ) {
					filename = filename.slice( 1, -1 );
				}

				let message;
				// Per https://lesscss.org/features/#import-atrules-feature-file-extensions:
				// * If the file has a .css extension it will be treated as CSS  [...]
				// * If it has any other extension it will be treated as Less and imported.
				// * If it does not have an extension, .less will be appended [...]
				// The (less) keyword can be used to override the above rules.
				if (
					path.extname( filename ).toLowerCase() === '.css' &&
					!( atRule.options && atRule.options.includes( 'less' ) ) &&
					!( atRule.options && atRule.options.includes( 'inline' ) )
				) {
					message = 'Files with a .css extension are not handled by LESS.';
				}

				if ( !message ) {
					return;
				}

				report( {
					message: message,
					node: atRule,
					ruleName,
					result: postcssResult,
					word: atRule.filename
				} );
			} );
		};
	}
);

module.exports.ruleName = ruleName;
