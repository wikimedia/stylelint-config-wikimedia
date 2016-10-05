module.exports = {
	"rules": {

		"indentation": [ "tab" ],
		"max-empty-lines": 1,
		"no-eol-whitespace": true,
		"no-missing-end-of-source-newline": true,

		"no-duplicate-selectors": true,
		"no-descending-specificity": true,
		"declaration-no-important": true,
		"selector-no-id": true,
		"selector-attribute-quotes": "always",

		"no-browser-hacks": [ true, {
			"browsers": [
				">0.1%",
				"last 2 Chrome versions",
				"last 2 ChromeAndroid versions",
				"Explorer >= 6",
				"ExplorerMobile >= 6",
				"Edge >= 12",
				"Firefox >= 3",
				"FirefoxAndroid >= 3",
				"Safari >= 3",
				"Opera >= 10",
				"OperaMobile >= 10",
				"iOS >= 6.1",
				"Android >= 2.3",
				"not BlackBerry >= 1",
				"not OperaMini >= 1",
			]
		} ],

		"no-unsupported-browser-features": [ true, {
			"browsers": [
				">5%",
				"last 2 Chrome versions",
				"last 2 ChromeAndroid versions",
				"Explorer >= 9",
				"ExplorerMobile >= 9",
				"Edge >= 12",
				"last 2 Firefox versions",
				"last 2 FirefoxAndroid versions",
				"Safari >= 5.1",
				"Opera >= 12.1",
				"OperaMobile >= 12",
				"iOS >= 6.1",
				"Android >= 2.3",
				"not BlackBerry >= 1",
				"not OperaMini >= 1",
			]
		} ],

		"no-unknown-animations": true,

		"color-hex-case": [ "lower" ],
		"color-hex-length": [ "short" ],
		"color-named": [ "never" ],
		"color-no-invalid-hex": true,

		"font-family-name-quotes": [ "always-unless-keyword" ],
		"font-weight-notation": [ "named-where-possible" ],

		"function-calc-no-unspaced-operator": true,
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": [ "always" ],
		"function-comma-space-before": [ "never" ],
		"function-parentheses-newline-inside": [ "never-multi-line" ],
		"function-parentheses-space-inside": [ "always" ],
		"function-url-no-scheme-relative": true,
		"function-url-quotes": [ "never" ],
		"function-url-scheme-whitelist": ["https", "data"],
		"function-whitespace-after": [ "always" ],

		"number-leading-zero": [ "always" ],
		"number-no-trailing-zeros": true,

		"length-zero-no-unit": true,

		"value-list-comma-newline-after": [ "never-multi-line" ],
		"value-list-comma-newline-before": [ "never-multi-line" ],
		"value-list-comma-space-after": [ "always-single-line" ],
		"value-list-comma-space-before": [ "never" ],

		"declaration-bang-space-after": [ "never" ],
		"declaration-bang-space-before": [ "always" ],
		"declaration-colon-space-after": [ "always" ],
		"declaration-colon-space-before": [ "never" ],

		"string-no-newline": true,
		"string-quotes": [ "single" ],

		"declaration-block-no-duplicate-properties": [ true, { ignore: [ "consecutive-duplicates" ] } ],
		"declaration-block-no-redundant-longhand-properties": true,
		"declaration-block-no-shorthand-property-overrides": true,

		"declaration-block-semicolon-newline-after": [ "always" ],
		"declaration-block-semicolon-newline-before": [ "never-multi-line" ],
		"declaration-block-semicolon-space-after": [ "always-single-line" ],
		"declaration-block-semicolon-space-before": [ "never" ],
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": [ "always" ],

		"block-closing-brace-newline-after": [ "always" ],
		"block-closing-brace-newline-before": [ "always-multi-line" ],
		"block-closing-brace-space-after": [ "always-single-line" ],
		"block-closing-brace-space-before": [ "always-single-line" ],
		"block-no-empty": true,
		"block-no-single-line": true,
		"block-opening-brace-newline-after": [ "always-multi-line" ],
		"block-opening-brace-space-after": [ "always-single-line" ],
		"block-opening-brace-space-before": [ "always" ],
		
		"comment-no-empty": true,
		
		"custom-property-no-outside-root": true,

		"selector-combinator-space-after": [ "always" ],
		"selector-combinator-space-before": [ "always" ],
		"selector-descendant-combinator-no-non-space": true,
		"selector-no-vendor-prefix": true,
		"selector-root-no-composition": true,
		"selector-pseudo-element-colon-notation": [ "single" ],

		"selector-list-comma-newline-after": [ "always" ],
		"selector-list-comma-newline-before": [ "never-multi-line" ],
		"selector-list-comma-space-after": [ "always-single-line" ],
		"selector-list-comma-space-before": [ "never" ],
		
		"shorthand-property-no-redundant-values": true,

		"media-feature-colon-space-after": [ "always" ],
		"media-feature-colon-space-before": [ "never" ],
		"media-feature-name-case": [ "lower" ],
		"media-feature-name-no-vendor-prefix": true,
		"media-feature-name-no-unknown": true,
		"media-feature-no-missing-punctuation": true,
		"media-feature-range-operator-space-after": [ "always" ],
		"media-feature-range-operator-space-before": [ "always" ],
		"media-feature-parentheses-space-inside": [ "always" ],

		"media-query-list-comma-newline-after": [ "always-multi-line" ],
		"media-query-list-comma-newline-before": [ "never-multi-line" ],
		"media-query-list-comma-space-after": [ "always-single-line" ],
		"media-query-list-comma-space-before": [ "never" ],

		"at-rule-empty-line-before": [ "always", {
			except: [ "blockless-group", "first-nested" ],
			ignore: [ "after-comment" ],
		} ],

		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always-single-line",
		"at-rule-no-unknown": true,

		"declaration-property-value-blacklist": {
			"/^border/": [ "none" ],
			"/^outline/": [ "none" ]
		}
	}
};
