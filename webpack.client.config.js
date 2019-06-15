/* globals __dirname */
const path = require("path");
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
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    output: {
        // Where to find the file
        path: path.resolve(__dirname + "/dist"),
        // The JS file path that will be used in the HTML file
        publicPath: "/",
        // What the file with all the JS will be called
        filename: "client.js"
    }
};

module.exports = client;
