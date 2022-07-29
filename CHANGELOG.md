# Changelog

## 0.13.1 / 2022-07-29
* Add back support for linting `.vue` files (James D. Forrester)
* Add `reportNeedlessDisables` to main config (Ed Sanders)
* Rule fix: Ensure `selector-class-pattern` is a prefix (Ed Sanders)
* Tests: Assert disabled rules (Ed Sanders)

## 0.13.0 / 2022-04-29
* Require stylelint 14.8.1, up from 14.2.0 (Ed Sanders)
* profiles: Remove 'grade-a' and 'grade-c' deprecated aliases for 'support-modern' and 'support-basic' (Ed Sanders)
* New rule: `function-no-unknown` (Ed Sanders)
* New rule: `selector-not-notation` (Ed Sanders)
* New rules from extending stylelint-config-recommended: (Ed Sanders)
** `custom-property-no-missing-var-function`
** `declaration-block-no-duplicate-custom-properties`
** `font-family-no-duplicate-names`
** `keyframe-declaration-no-important`
** `named-grid-areas-no-invalid`
** `no-duplicate-at-import-rules`
** `no-empty-source`
** `no-invalid-position-at-import-rule`
** `no-irregular-whitespace`
** `selector-pseudo-element-no-unknown`
* Changed rule: `declaration-block-no-duplicate-properties`, from `ignore:consecutive-duplicates` to `ignore:consecutive-duplicates-with-different-values`. (Ed Sanders)
* Changed rule: `no-invalid-position-at-import-rule`, disable in LESS files (Ed Sanders)
* Changed rule: `font-family-no-duplicate-names`, allow 'monospace, monospace' hack (Ed Sanders)
* Changed rule: `function-name-case`: Remove exception for 'DXImageTransform.Microsoft' (Ed Sanders)
* profiles: Introduce 'mediawiki' config (Ed Sanders)
* mediawiki profile: New rule: `selector-class-pattern`, to prevent use of overly-generic class names without prefixes (James D. Forrester)
* mediawiki profile: New rule: `at-rule-disallowed-list`, disallowing @import outside of LESS files (Ed Sanders)
* mediawiki profile: New rule: `wikimedia/no-at-import-css` for LESS files, blocking unsupported @import at-rules (Ed Sanders)

## 0.12.2 / 2022-02-22
* Add postcss-less as a peerDependency too (James D. Forrester)

## 0.12.1 / 2022-02-19
* Upgrade postcss-less from devDependency to dependency (James D. Forrester)
* Update postcss-less to 6.0.0 (Ed Sanders)

## 0.12.0 / 2022-01-14
* Require stylelint 14.2.0, up from 13.13.1 (James D. Forrester)

## 0.11.1 / 2021-06-13
* Fix grade-n filenames (Ed Sanders)

## 0.11.0 / 2021-06-03
* New rule: `declaration-property-unit-disallowed-list`, set to `px` for `font-size` and `line-height` (Volker E)
* Support profiles: Rename 'grade-a' and 'grade-c' to 'support-modern' and 'support-basic' (Volker E)
* Support profiles: Bump MediaWiki browser versions (Ed Sanders)

## 0.10.3 / 2020-11-19
* Update names of "-disallowed-list" keys (Ed Sanders)
* Require stylelint 13.8.0, up from 13.7.0 (Ed Sanders)

## 0.10.2 / 2020-11-18
* Require stylelint 13.7.0, up from 13.3.2 (James D. Forrester)
* Create Grade A/C presets for plugin/no-unsupported-browser-features (Ed Sanders)
* grade-a: Enable new ignorePartialSupport flag (Ed Sanders)
* grade-c: Bump FireFox to 3.6 (Ed Sanders)

## 0.10.1 / 2020-04-15
* Require stylelint 13.3.2, up from 13.2.1 (James D. Forrester)

## 0.10.0 / 2020-03-31
* Require stylelint 13.2.1, up from 13.2.0 (James D. Forrester)

## 0.9.0 / 2020-02-14
* Require stylelint 13.2.0, up from 12.0.0 (James D. Forrester)

## 0.8.0 / 2019-12-11
* Require stylelint 12.0.0, up from 11.1.1 (James D. Forrester)

## 0.7.0 / 2019-10-22
* Require stylelint 11.1.1, up from 10.1.0 (James D. Forrester)
* New rule: Add `rem` to `unit-blacklist` (Volker E)

## 0.6.0 / 2019-04-30
* Require stylelint 10.0.1, up from 9.6.0 (James D. Forrester)

## 0.5.0 / 2018-11-28
* Move stylelint to be a true dependency, not a peerDependency (James D. Forrester)
* Bump stylelint dependency from 9.2.0 to 9.6.0 (James D. Forrester)
* New rule: `block-closing-brace-empty-line-before`, set to `never` (Volker E)
* New rule: `comment-whitespace-inside`, set to `always` (Volker E)
* New rule: `declaration-empty-line-before`, set to `never` with exemptions (Volker E)
* New rule: `font-family-no-missing-generic-family-keyword`, set to `true` (Volker E)
* New rule: `linebreaks`, set to `unix` (James D. Forrester)
* New rule: `rule-empty-line-before`, set to `always-multi-line` with exemptions (Volker E)
* New rule: `selector-max-empty-lines`, set to `0` (Volker E)
* Changed rule: `block-opening-brace-space-before`, from `always-single-line` to `always` (Volker E)

## 0.4.3 / 2018-04-04
* build: Bump stylelint dependency from 8.2.0 to 8.4.0 (ricordisamoa)
* build: Bump stylelint dependency from 8.4.0 to 9.2.0 (James D. Forrester)

## 0.4.2 / 2017-10-26
* New rule: `function-blacklist`, configured to prevent `rgb()` color notation (Volker E)
* Changed rule: `selector-attribute-brackets-space-inside`, set to `always` not `never` (Ed Sanders)
* build: Bump stylelint dependency from 7.8.0 to 7.12.0 (Ed Sanders)
* build: Bump stylelint dependency from 7.12.0 to 8.2.0 (James D. Forrester)

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

## 0.1.0 / 2016-05-17
* Initial release (James D. Forrester)
