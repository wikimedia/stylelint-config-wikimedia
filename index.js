module.exports = {
	"rules": {
		// Wikimedia Foundation ♡ whitespace in its own special way
		// See also https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS#Whitespace
		"indentation": [ "tab" ],
		"max-empty-lines": 1,
		"no-eol-whitespace": true,
		"no-missing-end-of-source-newline": true,

		// Other rules alphabetically
		"at-rule-empty-line-before": [ "always", {
			except: [ "blockless-after-blockless", "first-nested" ],
			ignore: [ "after-comment" ],
		} ],
		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always-single-line",
		"at-rule-no-unknown": true,
		"at-rule-semicolon-newline-after": [ "always" ],

		"block-closing-brace-newline-after": [ "always" ],
		"block-closing-brace-newline-before": [ "always-multi-line" ],
		"block-closing-brace-space-after": [ "always-single-line" ],
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

		"comment-no-empty": true,

		"custom-property-no-outside-root": true,

		"declaration-bang-space-after": [ "never" ],
		"declaration-bang-space-before": [ "always" ],

		"declaration-block-no-duplicate-properties": [ true, { ignore: [ "consecutive-duplicates" ] } ],
		"declaration-block-no-redundant-longhand-properties": true,
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

		"declaration-property-value-blacklist": {
			"/^border/": [ "none" ],
			"/^outline/": [ "none" ]
		},

		"font-family-name-quotes": [ "always-unless-keyword" ],
		"font-weight-notation": [ "named-where-possible" ],

		"function-calc-no-unspaced-operator": true,
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": [ "always" ],
		"function-comma-space-before": [ "never" ],
		"function-linear-gradient-no-nonstandard-direction": true,
		"function-max-empty-lines": 0,
		"function-name-case": [ "lower" ],
		"function-parentheses-newline-inside": [ "never-multi-line" ],
		"function-parentheses-space-inside": [ "always" ],
		"function-url-no-scheme-relative": true,
		"function-url-quotes": [ "never" ],
		"function-url-scheme-whitelist": ["https", "data"],
		"function-whitespace-after": [ "always" ],

		"length-zero-no-unit": true,

		"media-feature-colon-space-after": [ "always" ],
		"media-feature-colon-space-before": [ "never" ],
		"media-feature-name-case": [ "lower" ],
		"media-feature-name-no-unknown": true,
		"media-feature-name-no-vendor-prefix": null,
		"media-feature-no-missing-punctuation": true,
		"media-feature-range-operator-space-after": [ "always" ],
		"media-feature-range-operator-space-before": [ "always" ],
		"media-feature-parentheses-space-inside": [ "always" ],

		"media-query-list-comma-newline-after": [ "always-multi-line" ],
		"media-query-list-comma-newline-before": [ "never-multi-line" ],
		"media-query-list-comma-space-after": [ "always-single-line" ],
		"media-query-list-comma-space-before": [ "never" ],

		"no-descending-specificity": true,
		"no-duplicate-selectors": true,
		"no-invalid-double-slash-comments": true,
		"no-extra-semicolons": true,
		"no-unknown-animations": true,

		"number-leading-zero": [ "always" ],
		"number-no-trailing-zeros": true,

		"property-case": [ "lower" ],
		"property-no-unknown": true,

		"root-no-standard-properties": true,

		"selector-attribute-brackets-space-inside": [ "never" ],
		"selector-attribute-operator-space-after": [ "never" ],
		"selector-attribute-operator-space-before": [ "never" ],
		"selector-attribute-quotes": "always",
		"selector-combinator-space-after": [ "always" ],
		"selector-combinator-space-before": [ "always" ],
		"selector-descendant-combinator-no-non-space": true,

		"selector-list-comma-newline-after": [ "always" ],
		"selector-list-comma-newline-before": [ "never-multi-line" ],
		"selector-list-comma-space-after": [ "always-single-line" ],
		"selector-list-comma-space-before": [ "never" ],

		"selector-no-id": true,
		"selector-no-vendor-prefix": true,
		"selector-pseudo-class-case": [ "lower" ],
		"selector-pseudo-class-no-unknown": true,
		"selector-pseudo-class-parentheses-space-inside": [ "always" ],
		"selector-pseudo-element-case": [ "lower" ],
		"selector-pseudo-element-colon-notation": [ "single" ],
		"selector-type-case": [ "lower" ],
		"selector-type-no-unknown": true,
		"selector-pseudo-element-colon-notation": [ "single" ],

		"shorthand-property-no-redundant-values": true,

		"string-no-newline": true,
		"string-quotes": [ "single" ],

		"time-no-imperceptible": true,

		"unit-case": [ "lower" ],
		"unit-no-unknown": true,

		"value-keyword-case": [ "lower" ],
		"value-list-max-empty-lines": 0,

		"value-list-comma-newline-after": [ "never-multi-line" ],
		"value-list-comma-newline-before": [ "never-multi-line" ],
		"value-list-comma-space-after": [ "always-single-line" ],
		"value-list-comma-space-before": [ "never" ]
	}
};
