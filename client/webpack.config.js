var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname , '/dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/to_do": "http://localhost:8080"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
  // "proxy": "http://localhost:8080/"