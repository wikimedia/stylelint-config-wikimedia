module.exports = {
	"rules": {

		"at-rule-empty-line-before": [ "always", {
			except: [ "blockless-group", "first-nested" ],
			ignore: [ "after-comment" ],
		} ],
		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always-single-line",

		"block-closing-brace-newline-after": [ "always" ],
		"block-closing-brace-newline-before": [ "always-multi-line" ],
		"block-closing-brace-space-before": [ "always-single-line" ],

		"block-no-empty": true,
		"block-no-single-line": true,

		"block-opening-brace-newline-after": [ "always-multi-line" ],
		"block-opening-brace-space-after": [ "always-single-line" ],
		"block-opening-brace-space-before": [ "always" ],

		"color-hex-case": [ "lower" ],
		"color-hex-length": [ "short" ],
		"color-named": [ "never" ],
		"color-no-invalid-hex": true,

		"declaration-bang-space-after": [ "never" ],
		"declaration-bang-space-before": [ "always" ],

		"declaration-block-no-duplicate-properties": [ true, { ignore: [ "consecutive-duplicates" ] } ],
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-semicolon-newline-after": [ "always" ],
		"declaration-block-semicolon-newline-before": [ "never-multi-line" ],
		"declaration-block-semicolon-space-after": [ "always-single-line" ],
		"declaration-block-semicolon-space-before": [ "never" ],
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": [ "always" ],

		"declaration-colon-space-after": [ "always" ],
		"declaration-colon-space-before": [ "never" ],
		"declaration-no-important": true,

		"font-family-name-quotes": [ "single-unless-keyword" ],
		"font-weight-notation": [ "named-where-possible" ],

		"function-calc-no-unspaced-operator": true,
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": [ "always" ],
		"function-comma-space-before": [ "never" ],
		"function-parentheses-newline-inside": [ "never-multi-line" ],
		"function-parentheses-space-inside": [ "always" ],
		"function-url-quotes": [ "none" ],
		"function-whitespace-after": [ "always" ],

		"indentation": [ "tab" ],
		"max-empty-lines": 1,

		"media-feature-colon-space-after": [ "always" ],
		"media-feature-colon-space-before": [ "never" ],
		"media-feature-name-no-vendor-prefix": true,
		"media-feature-no-missing-punctuation": true,
		"media-feature-range-operator-space-after": [ "always" ],
		"media-feature-range-operator-space-before": [ "always" ],

		"media-query-parentheses-space-inside": [ "always" ],

		"media-query-list-comma-newline-after": [ "always-multi-line" ],
		"media-query-list-comma-newline-before": [ "never-multi-line" ],
		"media-query-list-comma-space-after": [ "always-single-line" ],
		"media-query-list-comma-space-before": [ "never" ],

		"no-eol-whitespace": true,
		"no-missing-eof-newline": true,
		"no-duplicate-selectors": true,
		"no-descending-specificity": true,
		"no-unknown-animations": true,

		"value-list-comma-newline-after": [ "never-multi-line" ],
		"value-list-comma-newline-before": [ "always-multi-line" ],
		"value-list-comma-space-after": [ "always-single-line" ],
		"value-list-comma-space-before": [ "never" ],

		"string-no-newline": true,

		"selector-combinator-space-after": [ "always" ],
		"selector-combinator-space-before": [ "always" ],
		"selector-no-id": true,
		"selector-no-vendor-prefix": true,
		"selector-root-no-composition": true,
		"selector-pseudo-element-colon-notation": [ "double" ],

		"selector-list-comma-newline-after": [ "always" ],
		"selector-list-comma-newline-before": [ "never-multi-line" ],
		"selector-list-comma-space-after": [ "always-single-line" ],
		"selector-list-comma-space-before": [ "never" ]

	}
}
