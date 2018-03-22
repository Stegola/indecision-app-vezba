const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    // entry: './src/index.js', 
    // output: {
    //     path: '/dist/',
    //     filename: './main.js'
    // },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: [
                    /\.sass$/,
                    /\.css$/ 
                ],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};