const webpackNodeExternals = require("webpack-node-externals");
const path = require("path");
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
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    output: {
        // What the file with all the JS will be called
        filename: "server.js",
        // Where to find the file
        path: path.resolve(__dirname + "/dist"),
        // The JS file path that will be used in the HTML file
        publicPath: "/"

    },
    // The environment to target the build for
    target: "node",
    // Configure the webpack dev server
    devServer: {
        // The directory that the server will start from (the root)
        contentBase: path.join(__dirname, "/dist")
    }
};

module.exports = server;
