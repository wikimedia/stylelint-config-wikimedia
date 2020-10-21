# stylelint-config-wikimedia
[![NPM version](http://img.shields.io/npm/v/stylelint-config-wikimedia.svg)](https://www.npmjs.org/package/stylelint-config-wikimedia)
> Wikimedia CSS Coding Standards shareable config for stylelint

Configuration rules to ensure your CSS is compliant with the [Wikimedia CSS Coding Standards](https://www.mediawiki.org/wiki/Manual:Coding_conventions/CSS).


## Installation

```console
$ npm install -D stylelint-config-wikimedia
```


## Usage

Set your `stylelint` config file, `.stylelintrc.json`, to:

```json
{
	"extends": "stylelint-config-wikimedia"
}
```

If you would also like to enable rules to disallow CSS which is unsupported by [Grade A](https://www.mediawiki.org/wiki/Compatibility#Modern_(Grade_A)) or [Grade C](https://www.mediawiki.org/wiki/Compatibility#Basic_(Grade_C)) browsers, you can use the following configs instead:

```json
{
	"extends": "stylelint-config-wikimedia/grade-a"
}
```

```json
{
	"extends": "stylelint-config-wikimedia/grade-c"
}
```


### Extending the config
Simply add a `"rules"` object to your config file, and add your over-rides there.


## Changelog
You can read the [changelog](CHANGELOG.md) for release versions.


## Licence
This is available under the [MIT LICENSE](LICENSE).
