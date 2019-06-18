/* globals __dirname */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const client = {
    // Where to start the build
    entry: {
        client: "./src/client.jsx"
    },
    // Ignore node_modules when doing the build
    target: "web",
    externals: ["/node_modules"],
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
                test: /\.css$/,
                exclude: "/node_modules",
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
                            modules: {
                                localIdentName: "[local]___[hash:base64:5]"
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ],
    resolve: {
        extensions: [ ".js", ".jsx" ],
    },
    output: {
        // Where to find the file
        path: path.resolve(__dirname + "/dist/public"),
        // The JS file path that will be used in the HTML file
        // What the file with all the JS will be called
        filename: "client.js"
    }
};

module.exports = client;
