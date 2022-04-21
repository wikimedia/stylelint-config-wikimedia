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

QUnit.module( 'default config', () => {
	const configName = 'default';
	const fixturesDir = path.resolve( __dirname, `fixtures/${configName}` );
	const fixturesFiles = fs.readdirSync( fixturesDir )
		.map( ( file ) => path.resolve( fixturesDir, file ) );

	const invalidFixturesFiles = fixturesFiles.filter( ( file ) => file.includes( '/invalid' ) );
	const invalidFixtures = invalidFixturesFiles.map( ( file ) =>
		fs.readFileSync( file ).toString()
	).join( '' );

	QUnit.test( 'Rules are covered in invalid fixture', ( assert ) => {
		const done = assert.async();

		stylelint.resolveConfig( fixturesDir ).then( ( config ) => {

			const rules = config.rules;

			function isEnabled( rule ) {
				return rules[ rule ] !== null;
			}

			Object.keys( rules ).forEach( ( rule ) => {
				// Disabled rules are covered below.
				if ( isEnabled( rule ) ) {
					const rDisableRule = new RegExp( `(/[/*]|<!--|#) (skip-)?stylelint-disable((-next)?-line)? ([a-z-/]+, ?)*?${rule}($|[^a-z-])` );
					assert.true( rDisableRule.test( invalidFixtures ), `Rule '${rule}' is covered in invalid fixture` );
				}
			} );

			done();
		} );
	} );
} );
