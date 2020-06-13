const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    })]
}