'use strict';

const stylelint = require( 'stylelint' );
const fs = require( 'fs' );
const path = require( 'path' );
const configs = require( '../package.json' ).files;

QUnit.module( 'package.json', () => {
	QUnit.test( 'All files are included', ( assert ) => {
		const excludeList = [
			'.eslintrc.json',
			'package.json',
			'package-lock.json'
		];
		fs.readdirSync( path.resolve( __dirname, '../' ) ).forEach( ( file ) => {
			const ext = path.extname( file );
			if (
				( ext === '.js' || ext === '.json' ) &&
				!excludeList.includes( file )
			) {
				assert.true( configs.includes( file ), `'${file}' found in package.json's 'files' list` );
			}
		} );
	} );
} );

[ 'default', 'mediawiki', 'basic', 'modern' ].forEach( ( configName ) => {
	QUnit.module( `${configName} config`, () => {
		const fixturesDir = path.resolve( __dirname, `fixtures/${configName}` );
		// eslint-disable-next-line security/detect-non-literal-fs-filename
		const fixturesFiles = fs.readdirSync( fixturesDir )
			.map( ( file ) => path.resolve( fixturesDir, file ) );

		const invalidFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/invalid' ) );
		const validFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/valid' ) );
		const tested = {};

		[ '.css', '.less', '.vue' ].forEach( ( ext ) => {
			const invalidFixturesFiltered = invalidFixturesFiles
				.filter( ( file ) => path.extname( file ) === ext );
			const validFixturesFiltered = validFixturesFiles
				.filter( ( file ) => path.extname( file ) === ext );

			if ( !invalidFixturesFiltered.length && !validFixturesFiltered.length ) {
				return;
			}

			const invalidFixtures = invalidFixturesFiltered.map( ( file ) =>
				// eslint-disable-next-line security/detect-non-literal-fs-filename
				fs.readFileSync( file ).toString()
			).join( '' );
			const validFixtures = validFixturesFiltered.map( ( file ) =>
				// eslint-disable-next-line security/detect-non-literal-fs-filename
				fs.readFileSync( file ).toString()
			).join( '' );

			QUnit.test( `Rules are covered in ${ext}`, ( assert ) => {
				const done = assert.async();

				stylelint.resolveConfig( fixturesDir + '/invalid' + ext ).then( ( config ) => {

					const rules = config.rules;

					function isEnabled( rule ) {
						return rules[ rule ] !== null;
					}

					Object.keys( rules ).forEach( ( rule ) => {
						const ruleValueIndex = rule + JSON.stringify( rules[ rule ] );
						// Disabled rules are covered later
						if ( isEnabled( rule ) && !tested[ ruleValueIndex ] ) {
							// eslint-disable-next-line security/detect-non-literal-regexp
							const rDisableRule = new RegExp( `(/[/*]|<!--|#) (skip-)?stylelint-disable((-next)?-line)? ([a-z-/]+, ?)*?${rule}($|[^a-z-])` );
							assert.true( rDisableRule.test( invalidFixtures ), `Rule '${rule}' is covered in invalid fixture` );
							tested[ ruleValueIndex ] = true;
						}
					} );

					Object.keys( rules ).forEach( ( rule ) => {
						// eslint-disable-next-line security/detect-non-literal-regexp
						const rEnableRule = new RegExp( `Off: ${rule}($|[^a-z-])` );
						if ( !isEnabled( rule ) ) {
							assert.true( rEnableRule.test( validFixtures ), `Rule '${rule}' is covered as "off" in valid fixture` );
						} else {
							assert.true( !rEnableRule.test( validFixtures ), `Rule '${rule}' is not covered as "off" in valid fixture` );
						}
					} );

					done();
				} );
			} );
		} );
	} );
} );
