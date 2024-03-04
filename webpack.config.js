const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        // test: './modules/test.js',
        // eventListener: './modules/EventListeners.js',
        main: './modules/EventListeners.js',
        // page: './modules/Page.js',
        // localStorage: './modules/LocalStorage.js',
        // index: './index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jpeg'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@images': path.resolve(__dirname, 'src/images')
        },
    },
    devServer: {
        port: 4200,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/images/icon.ico'),
                to: path.resolve(__dirname, 'dist')
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}