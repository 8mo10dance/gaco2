const path = require('path')
const webpack = require('webpack')

module.exports = (env, argv) => ({
    entry: "./src/index.js",
    output: {
	path: path.resolve(__dirname, "public"),
	filename: "bundle.js",
    },
    resolve: {
	extensions: ['.js'],
	modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    devtool: argv.mode === "development" ? "source-map" : "hidden-source-map",
    devServer: {
	static: {
	    directory: path.join(__dirname, "public"),
	},
	compress: true,
	port: 9000,
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		use: [
		    {
			loader: "babel-loader",
		    },
		],
		include: [path.resolve(__dirname, "src")],
	    },
	],
    },
});
