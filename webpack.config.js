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
	...defaultConfig,
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				editor: {
					name: 'editor',
					test: /editor\.(sc|sa|c)ss$/,
					enforce: true,
				},
				style: {
					name: 'styles',
					test: /style\.(sc|sa|c)ss$/,
					enforce: true,
				},
				theme: {
					name: 'theme',
					test: /theme\.(sc|sa|c)ss$/,
					enforce: true,
				},
				default: false,
			},
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: require.resolve( 'css-loader' ),
					},
					{
						loader: require.resolve( 'sass-loader' ),
					},
					{
						loader: require.resolve( 'postcss-loader' ),
						options: {
							ident: 'postcss',
							plugins: () => [ postcssPresetEnv({
                // Start with a stage.
                stage: 3,
                // Override specific features you do (or don't) want.
                features: {
                  // And, optionally, configure rules/features as needed.
                  'custom-media-queries': {
                    preserve: false,
                  },
                  'custom-properties': {
                    preserve: true,
                  },
                  'nesting-rules': true,
                },
              } ) ],
						},
					},
				],
			},
		],
	},
	plugins: [
		...defaultConfig.plugins,
		new MiniCssExtractPlugin(),
	],
};
