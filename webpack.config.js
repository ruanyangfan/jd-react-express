const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {test: /\.js|jsx$/,exclude: /node_modules/,use: ['babel-loader'] },
            {test: /\.css$/ ,use: ['style-loader',{loader: 'css-loader'}] },
            {test: /\.png|svg|jpg|gif$/ ,use: ['file-loader'] },
            {test: /\.woff|woff2|eot|ttf|otf$/ ,use: ['file-loader'] },
        ]

    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: { 
        extensions: ['.js','.jsx','.json'],
        alias: {
            '@': path.join(__dirname,'./src') 
         }
    } 
}