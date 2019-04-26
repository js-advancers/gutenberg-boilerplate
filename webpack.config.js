const webpack = require( 'webpack' );
const defaultConfig = require( './node_modules/@wordpress/scripts/config/webpack.config' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
	
	entry: {
		...defaultConfig.entry,
		frontend: './src/frontend.js',
	}
};
