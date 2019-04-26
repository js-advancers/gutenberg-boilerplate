const webpack = require( 'webpack' );
const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

function recursiveIssuer( m ) {
	if ( m.issuer ) {
		return recursiveIssuer( m.issuer );
	}
	console.log( Object.keys( m ) + '\n' );

	return false;
}

module.exports = {
	
	entry: {
		...defaultConfig.entry,
		frontend: './src/frontend.js',
	}
};
