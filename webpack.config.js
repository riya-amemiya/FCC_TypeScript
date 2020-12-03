const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // 本番にデプロイするときはモード値を production に設定
    // development に設定すると元のファイルとの関連性がわかるソースマップと一緒に出力される
    mode: 'development',
    output: {
        filename: '[name].js',
        path: outputPath
    },
    // 環境によってはsrc/index.ts
    entry: {
        FCC: './build/FCC.js',
        demo: './demo/js/index.js'
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                'css-loader'
            ]
        }, {
            test: /\.scss$/i,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: 'expanded',
                        },
                    },
                },
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', //loader名
                options: { //Babelの設定
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime'],
                }
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        }),
        new HtmlWebpackPlugin({
            title: 'My app',
            chunks: [`index`, 'demo'],
            originalHeader: 'original header title',
            meta: [{
                    viewport: 'width=device-width, initial-scale=1'
                },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge'
                }
            ],
            template: `./demo/html/index.html`,
            filename: `index.html`,
            hash: true
        })
    ],
    resolve: {
        // React × TypeScriptで使う可能性のある拡張子を全て記述
        extensions: [
            '.ts', '.js', '.tsx', '.jsx'
        ],
    },
};