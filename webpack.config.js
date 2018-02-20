const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: './src'
    },
    module: {
        loaders: [
            {
                test: /\.(js)$/, 
				exclude: /node_modules/,
				use: 'babel-loader'
            },
            {
                test: /\.css$/, 				
				use: ['css-loader','style-loader']
            }
        ]
    }
}