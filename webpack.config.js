const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist/");
const SOURCE_DIR = path.resolve(__dirname, "src/");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: `${SOURCE_DIR}/index.jsx`
    },
    output: {
        path: path.resolve(DIST_DIR),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
    // mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 8192 }
                    },
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.m?(js|jsx)$/, //正则匹配.js格式的文件 m?代表前面可以匹配1-无穷次
                exclude: /(node_modules|bower_components)/, //排除掉一些文件夹
                use: [
                    {
                        loader: 'babel-loader', //使用babel-loader为这些文件进行打包
                    }
                ]
            },
            {
                test: /\.(scss|css)$/, //正则匹配.js格式的文件
                exclude: /(node_modules)/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    'postcss-loader'
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${SOURCE_DIR}/index.html`,
            inject: true
        })
    ]
}