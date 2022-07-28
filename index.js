"use strict";

/* Use JSON-style double quotes */
/* eslint quotes: ["error", "double"] */
/* eslint quote-props: ["error", "always"] */
module.exports = {
	"extends": "stylelint-config-recommended",
	"reportNeedlessDisables": true,
	"rules": {
		// Wikimedia Foundation ♡ whitespace in its own special way
		// See also https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS#Whitespace
		"indentation": "tab",
		"max-empty-lines": 1,
		"no-eol-whitespace": true,
		"no-missing-end-of-source-newline": true,

		// Other rules alphabetically
		"at-rule-empty-line-before": [ "always", {
			"except": [
				"blockless-after-blockless",
				"first-nested"
			],
			"ignore": "after-comment"
		} ],
		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always-single-line",
		"at-rule-semicolon-newline-after": "always",

		"block-closing-brace-empty-line-before": "never",
		"block-closing-brace-newline-after": "always",
		"block-closing-brace-newline-before": "always-multi-line",
		"block-closing-brace-space-after": "always-single-line",
		"block-closing-brace-space-before": "always-single-line",

		"block-opening-brace-newline-after": "always",
		"block-opening-brace-newline-before": "always-single-line",
		"block-opening-brace-space-after": "always-single-line",
		"block-opening-brace-space-before": "always",

		"color-hex-case": "lower",
		"color-hex-length": "short",
		"color-named": "never",

		"comment-whitespace-inside": "always",

		"declaration-bang-space-after": "never",
		"declaration-bang-space-before": "always",

		"declaration-block-no-redundant-longhand-properties": true,
		"declaration-block-semicolon-newline-after": "always",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": "always",

		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"declaration-empty-line-before": [ "never", {
			"ignore": [
				"after-comment",
				"inside-single-line-block"
			]
		} ],
		"declaration-no-important": true,

		// `px` values disable accessibility browser setting of user font overrides and
		// should be set in relative units like `em` or `rem` instead.
		"declaration-property-unit-disallowed-list": {
			"font-size": "px",
			"line-height": "px"
		},
		"declaration-property-value-disallowed-list": {
			"/^border/": "none",
			"/^outline/": "none"
		},

		"font-family-name-quotes": "always-unless-keyword",
		"font-family-no-duplicate-names": [ true, {
			// Allow the widely used 'monospace, monospace' hack for fixing the font size
			"ignoreFontFamilyNames": [ "monospace" ]
		} ],
		"font-weight-notation": "named-where-possible",

		"function-disallowed-list": "rgb",
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": "always",
		"function-comma-space-before": "never",
		"function-max-empty-lines": 0,
		"function-name-case": "lower",
		"function-parentheses-newline-inside": "never-multi-line",
		"function-parentheses-space-inside": "always",
		"function-url-no-scheme-relative": true,
		"function-url-quotes": "never",
		"function-whitespace-after": "always",

		"length-zero-no-unit": true,
		"linebreaks": "unix",

		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-case": "lower",
		"media-feature-parentheses-space-inside": "always",
		"media-feature-range-operator-space-after": "always",
		"media-feature-range-operator-space-before": "always",

		"media-query-list-comma-newline-after": "always-multi-line",
		"media-query-list-comma-newline-before": "never-multi-line",
		"media-query-list-comma-space-after": "always-single-line",
		"media-query-list-comma-space-before": "never",

		"no-unknown-animations": true,

		"number-leading-zero": "always",
		"number-no-trailing-zeros": true,

		"property-case": "lower",

		"rule-empty-line-before": [
			"always-multi-line", {
				"except": "first-nested",
				"ignore": "after-comment"
			}
		],

		"selector-attribute-brackets-space-inside": "always",
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-attribute-quotes": "always",
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,

		"selector-list-comma-newline-after": "always",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always-single-line",
		"selector-list-comma-space-before": "never",

		"selector-max-empty-lines": 0,
		"selector-max-id": 0,
		"selector-no-vendor-prefix": true,
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-parentheses-space-inside": "always",
		"selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "single",
		"selector-type-case": "lower",
		"selector-type-no-unknown": true,

		"string-quotes": "single",

		"time-min-milliseconds": 100,

		"unit-disallowed-list": "rem",
		"unit-case": "lower",

		"value-keyword-case": "lower",
		"value-list-max-empty-lines": 0,

		"value-list-comma-newline-after": "never-multi-line",
		"value-list-comma-newline-before": "never-multi-line",
		"value-list-comma-space-after": "always-single-line",
		"value-list-comma-space-before": "never"
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
