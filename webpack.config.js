const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = {
    // 本番にデプロイするときはモード値を production に設定
    // development に設定すると元のファイルとの関連性がわかるソースマップと一緒に出力される
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        path: outputPath
    },
    // 環境によってはsrc/index.ts
    entry: {
        index: './demo/ts/index.tsx',
        props: './demo/ts/component/Props.tsx',
        scss: "./demo/ts/scss.ts"
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
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: 'compressed',
                        }
                    },
                },
            ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', //loader名
                options: { //Babelの設定
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime', "babel-plugin-transform-react-jsx"],
                }
            }
        }, {
            test: [/\.ts$/, /\.tsx$/],
            use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            "sourceMap": false,
                            "declaration": false,
                            "declarationMap": false,
                        }
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './[name].css'
        })
    ],
    resolve: {
        // React × TypeScriptで使う可能性のある拡張子を全て記述
        extensions: [
            '.ts', '.js', '.tsx', '.jsx'
        ],
    },
};
Object.keys(webpackConfig.entry).forEach((key) => {
    if (key !== "scss") {
        webpackConfig.plugins.push(
            new HtmlWebpackPlugin({
                meta: [{
                        viewport: 'width=device-width, initial-scale=1'
                    },
                    {
                        'http-equiv': 'X-UA-Compatible',
                        content: 'IE=edge'
                    }
                ],
                template: (key === 'index') ? './demo/html/index.html' : './demo/html/' + key + '.html', // Source
                filename: (key === 'index') ? './index.html' : key + '.html', // Dist
                inject: true,
                hash: true,
                chunks: [key, "scss"], // insert to the root of output folder
            })
        );
    }
})
module.exports = webpackConfig