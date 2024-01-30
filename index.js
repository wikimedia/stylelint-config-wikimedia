"use strict";

/* Use JSON-style double quotes */
/* eslint quotes: ["error", "double"] */
/* eslint quote-props: ["error", "always"] */
module.exports = {
	"extends": [
		"stylelint-config-recommended",
		"@stylistic/stylelint-config"
	],
	"reportNeedlessDisables": true,
	"rules": {
		// Wikimedia Foundation ♡ whitespace in its own special way
		// See also https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS#Whitespace
		"@stylistic/indentation": "tab",
		"@stylistic/max-empty-lines": 1,
		"@stylistic/max-line-length": null,
		"@stylistic/no-eol-whitespace": true,
		"@stylistic/no-missing-end-of-source-newline": true,

		// Other rules alphabetically
		"at-rule-empty-line-before": [ "always", {
			"except": [
				"blockless-after-blockless",
				"first-nested"
			],
			"ignore": "after-comment"
		} ],
		"@stylistic/at-rule-name-case": "lower",
		"@stylistic/at-rule-name-space-after": "always-single-line",
		"@stylistic/at-rule-semicolon-newline-after": "always",

		"@stylistic/block-closing-brace-empty-line-before": "never",
		"@stylistic/block-closing-brace-newline-after": "always",
		"@stylistic/block-closing-brace-newline-before": "always-multi-line",
		"@stylistic/block-closing-brace-space-after": "always-single-line",
		"@stylistic/block-closing-brace-space-before": "always-single-line",

		"@stylistic/block-opening-brace-newline-after": "always",
		"@stylistic/block-opening-brace-newline-before": "always-single-line",
		"@stylistic/block-opening-brace-space-after": "always-single-line",
		"@stylistic/block-opening-brace-space-before": "always",

		"@stylistic/color-hex-case": "lower",
		"color-hex-length": "short",
		"color-named": "never",

		"comment-whitespace-inside": "always",

		"@stylistic/declaration-bang-space-after": "never",
		"@stylistic/declaration-bang-space-before": "always",

		"declaration-block-no-redundant-longhand-properties": [ true, {
			"ignoreShorthands": [ "inset" ]
		} ],
		"@stylistic/declaration-block-semicolon-newline-after": "always",
		"@stylistic/declaration-block-semicolon-newline-before": "never-multi-line",
		"@stylistic/declaration-block-semicolon-space-after": "always-single-line",
		"@stylistic/declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 1,
		"@stylistic/declaration-block-trailing-semicolon": "always",

		"@stylistic/declaration-colon-space-after": "always",
		"@stylistic/declaration-colon-space-before": "never",
		"declaration-empty-line-before": [ "never", {
			"ignore": [
				"after-comment",
				"inside-single-line-block"
			]
		} ],
		"@stylistic/declaration-colon-newline-after": "always-multi-line",
		"declaration-no-important": true,

		// `px` values disable accessibility browser setting of user font overrides and
		// should be set in relative units like `em` or `rem` instead.
		"declaration-property-unit-disallowed-list": {
			"font-size": "px",
			"line-height": "px"
		},
		"declaration-property-value-disallowed-list": {
			"/^border/": "none",
			"/^outline/": "none",
			"text-transform": "capitalize"
		},

		"font-family-name-quotes": "always-unless-keyword",
		"font-family-no-duplicate-names": [ true, {
			// Allow the widely used 'monospace, monospace' hack for fixing the font size
			"ignoreFontFamilyNames": [ "monospace" ]
		} ],
		"font-weight-notation": "named-where-possible",

		"function-disallowed-list": "rgb",
		"@stylistic/function-comma-newline-after": "never-multi-line",
		"@stylistic/function-comma-newline-before": "never-multi-line",
		"@stylistic/function-comma-space-after": "always",
		"@stylistic/function-comma-space-before": "never",
		"@stylistic/function-max-empty-lines": 0,
		"function-name-case": "lower",
		"@stylistic/function-parentheses-newline-inside": "never-multi-line",
		"@stylistic/function-parentheses-space-inside": "always",
		"function-url-no-scheme-relative": true,
		"function-url-quotes": "never",
		"@stylistic/function-whitespace-after": "always",

		"length-zero-no-unit": true,
		"@stylistic/linebreaks": "unix",

		"@stylistic/media-feature-colon-space-after": "always",
		"@stylistic/media-feature-colon-space-before": "never",
		"@stylistic/media-feature-name-case": "lower",
		"@stylistic/media-feature-parentheses-space-inside": "always",
		"@stylistic/media-feature-range-operator-space-after": "always",
		"@stylistic/media-feature-range-operator-space-before": "always",

		"@stylistic/media-query-list-comma-newline-after": "always-multi-line",
		"@stylistic/media-query-list-comma-newline-before": "never-multi-line",
		"@stylistic/media-query-list-comma-space-after": "always-single-line",
		"@stylistic/media-query-list-comma-space-before": "never",

		"no-unknown-animations": true,

		"media-query-no-invalid": null,

		"@stylistic/number-leading-zero": "always",
		"@stylistic/number-no-trailing-zeros": true,

		"@stylistic/property-case": "lower",

		"rule-empty-line-before": [
			"always-multi-line", {
				"except": "first-nested",
				"ignore": "after-comment"
			}
		],

		"@stylistic/selector-attribute-brackets-space-inside": "always",
		"@stylistic/selector-attribute-operator-space-after": "never",
		"@stylistic/selector-attribute-operator-space-before": "never",
		"selector-attribute-quotes": "always",
		"@stylistic/selector-combinator-space-after": "always",
		"@stylistic/selector-combinator-space-before": "always",
		"@stylistic/selector-descendant-combinator-no-non-space": true,

		"@stylistic/selector-list-comma-newline-after": "always",
		"@stylistic/selector-list-comma-newline-before": "never-multi-line",
		"@stylistic/selector-list-comma-space-after": "always-single-line",
		"@stylistic/selector-list-comma-space-before": "never",

		"@stylistic/selector-max-empty-lines": 0,
		"selector-max-id": 0,
		"selector-no-vendor-prefix": true,
		"@stylistic/selector-pseudo-class-case": "lower",
		"@stylistic/selector-pseudo-class-parentheses-space-inside": "always",
		"@stylistic/selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "double",
		"selector-type-case": "lower",
		"selector-type-no-unknown": true,

		"@stylistic/string-quotes": "single",

		"time-min-milliseconds": 100,

		"@stylistic/unit-case": "lower",

		"value-keyword-case": "lower",
		"@stylistic/value-list-max-empty-lines": 0,

		"@stylistic/value-list-comma-newline-after": "never-multi-line",
		"@stylistic/value-list-comma-newline-before": "never-multi-line",
		"@stylistic/value-list-comma-space-after": "always-single-line",
		"@stylistic/value-list-comma-space-before": "never"
	},
	"overrides": [
		{
			"files": [ "**/*.less" ],
			"customSyntax": "postcss-less",
			"rules": {
				// LESS functions are not supported by this rule
				"function-no-unknown": null,
				// LESS imports can go anywhere
				"no-invalid-position-at-import-rule": null
			}
		},
		// Vue support requires special over-rides for a customSyntax; note that these don't inherit
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
