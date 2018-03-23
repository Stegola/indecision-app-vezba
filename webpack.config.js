const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const path = require('path');

module.exports = (env) => {

    return {
        // entry: './src/index.js', 
        // output: {
        //     path: '/dist/',
        //     filename: './main.js'
        // },
        entry: './src/index.js',
        output: {
            path: __dirname + '/dist',
            filename: 'main.js',
            publicPath: '/'
        },

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
                        /\.css$/,
                        /\.sass$/
                    ],
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {  
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].css",
                chunkFilename: "[id].css"
            })
        ],
        devtool: 'inline-source-map', // development
        devServer: {
            historyApiFallback: true
        }
    }
};
