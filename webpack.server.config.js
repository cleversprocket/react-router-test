/* globals __dirname */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

const server = {
    // Where to start the build
    entry: {
        server: "./src/server.jsx",
    },
    // Ignore node_modules when doing the build
    externals: [webpackNodeExternals()],
    module: {
        rules: [
            {
                // process .js and .jsx files
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: {
                    // Using babel-loader
                    loader: "babel-loader"
                }
            },
            {
                test: /\.hbs$/,
                exclude: "/node_modules",
                use: {
                    loader: "handlebars-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: "/node_modules",
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]___[hash:base64:5]"
                            },
                            url: false,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: "./src/index.html.hbs"
        }),
        new MiniCssExtractPlugin({
            filename: "public/styles.css"
        }),
    ],
    resolve: {
        extensions: [ ".js", ".jsx" ],
    },
    output: {
        // What the file with all the JS will be called
        filename: "server.js",
        // Where to find the file
        path: path.resolve(__dirname + "/dist"),

    },
    // The environment to target the build for
    target: "node"
};

module.exports = server;
