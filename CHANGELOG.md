# Changelog

## 0.4.1 / 2017-02-17
* Remove rule: `custom-property-no-outside-root` is deprecated (James D. Forrester)
* Remove rule: `function-url-scheme-whitelist` is broken (James D. Forrester)
* Remove rule: `root-no-standard-properties` is deprecated (James D. Forrester)
* Replace rule: `time-no-imperceptible` to `time-min-milliseconds` (James D. Forrester)
* Change rule: `block-opening-brace-newline-before` from `always` to `always-single-line` (James D. Forrester)
* Change rule: `block-opening-brace-space-before` from `always` to `always-single-line` (James D. Forrester)

## 0.4.0 / 2017-02-17
* New rule: `at-rule-semicolon-newline-after`, configured as 'always' (Volker E)
* New rule: `comment-no-empty`, configured as 'true' (Volker E)
* New rule: `custom-property-no-outside-root`, configured as 'true' (Volker E)
* New rule: `declaration-block-no-redundant-longhand-properties`, configured as 'true' (Volker E)
* New rule: `function-linear-gradient-no-nonstandard-direction`, configured as 'true' (Volker E)
* New rule: `function-max-empty-lines`, configured as '0' (Volker E)
* New rule: `function-name-case`, configured as 'lower' (Volker E)
* New rule: `function-url-no-scheme-relative`, configured as 'true' (Volker E)
* New rule: `function-url-scheme-whitelist`, configured as 'data' and 'https' (Volker E)
* New rule: `media-feature-name-case`, configured as 'lower' (Volker E)
* New rule: `media-feature-name-no-unknown`, configured as 'true' (Volker E)
* New rule: `no-invalid-double-slash-comments`, configured as 'true' (Volker E)
* New rule: `property-case`, configured as 'lower' (Volker E)
* New rule: `property-no-unknown`, configured as 'true' (Volker E)
* New rule: `root-no-standard-properties`, configured as 'true' (Volker E)
* New rule: `selector-attribute-brackets-space-inside`, configured as 'never' (Volker E)
* New rule: `selector-attribute-operator-space-after`, configured as 'never' (Volker E)
* New rule: `selector-attribute-operator-space-before`, configured as 'never' (Volker E)
* New rule: `selector-descendant-combinator-no-non-space`, configured as 'true' (Volker E)
* New rule: `selector-pseudo-class-case`, configured as 'lower' (Volker E)
* New rule: `selector-pseudo-class-no-unknown`, configured as 'true' (Volker E)
* New rule: `selector-pseudo-class-parentheses-space-inside`, configured as 'always' (Volker E)
* New rule: `selector-pseudo-element-case`, configured as 'lower' (Volker E)
* New rule: `selector-type-case`, configured as 'lower' (Volker E)
* New rule: `selector-type-no-unknown`, configured as 'true' (Volker E)
* New rule: `time-no-imperceptible`, configured as 'true' (Volker E)
* New rule: `unit-case`, configured as 'lower' (Volker E)
* New rule: `unit-no-unknown`, configured as 'true' (Volker E)
* New rule: `value-keyword-case`, configured as 'lower' (Volker E)
* New rule: `value-list-max-empty-lines`, configured as '0' (Volker E)
* Remove rule: `media-feature-no-missing-punctuation` is deprecated (James D. Forrester)
* Remove rule: `selector-root-no-composition` is deprecated (James D. Forrester)
* Replace rule: `block-no-single-line` is deprecated (James D. Forrester)
* Change rule: Option for `at-rule-empty-line-before` was renamed (James D. Forrester)
* Change rule: Set `declaration-property-value-blacklist` to block `border: none` (Volker E)
* Change rule: Set `function-name-case` to ignore proprietary MS filters (Volker E)
* Change rule: Set `media-feature-name-no-vendor-prefix` to 'null', not 'true' (Volker E)
* build: Bump stylelint dependency from ^7.0.2 to ^7.3.1 (Volker E)
* build: Bump stylelint dependency from ^7.3.1 to 7.8.0 (James D. Forrester)

## 0.3.0 / 2016-07-20
* Change rule: Replace `no-missing-eof-newline` with `no-missing-end-of-source-newline` (Ed Sanders)
* Change rule: Replace `media-query-parentheses-space-inside` with `media-feature-parentheses-space-inside` (Ed Sanders)
* build: Bump stylelint dependency from ^6.9.0 to ^7.0.2 (Ed Sanders)

## 0.2.3 / 2016-07-12
* New rule: `at-rule-no-unknown`, configured as 'true' (James D. Forrester)
* New rule: `selector-attribute-quotes`, configured as 'always' (James D. Forrester)
* Change rule: Replace `number-zero-length-no-unit` with `length-zero-no-unit` (James D. Forrester)
* Change rule: Replace `property-value-blacklist` with `declaration-property-value-blacklist` (James D. Forrester)
* build: Bump stylelint dependency from 6.5.1 to ^6.9.0 (James D. Forrester)

## 0.2.2 / 2016-06-07
* build: Replace two deprecated rule values with equivalents (James D. Forrester)
* build: Replace `stylelint-value-border-zero` plugin with a `property-value-blacklist` rule (James D. Forrester)

## 0.2.1 / 2016-06-07
* build: Bump stylelint dependency from 6.3.3 to 6.5.1 (James D. Forrester)

## 0.2.0 / 2016-05-23
* New rule: `number-leading-zero`, configured as 'always' (James D. Forrester)
* New rule: `number-no-trailing-zeros`, configured as 'true' (James D. Forrester)
* New rule: `number-zero-length-no-unit`, configured as 'true' (James D. Forrester)
* New rule: `stylelint-value-border-zero` (via plugin), configured as '0' (Volker E)
* Change rule: Set `selector-pseudo-element-colon-notation` to 'single', not 'double' (Ed Sanders)
* Change rule: Set `value-list-comma-newline-before` to 'never-multi-line', not 'always-multi-line' (Volker E)
* build: Provide a .jscsrc file for local JavaScript linting (James D. Forrester)

## 0.1.0 / 2016-05-17
* Initial release (James D. Forrester)
