var path = require('path');

module.exports = {
	watch: true,
	entry: {
		build: './assets/src/js/app.js',
		vendors: './assets/src/js/vendors.js',
		gmaps: './assets/src/js/gmaps.js'
	},
	output: {
		filename: '[name].js',
	},
	resolve: {
		alias: {
			'@': path.resolve('./node_modules')
		}
	},
	devtool: 'source-map',
}

