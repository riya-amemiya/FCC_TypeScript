const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');
const webpackConfig = {
    // 本番にデプロイするときはモード値を production に設定
    // development に設定すると元のファイルとの関連性がわかるソースマップと一緒に出力される
    mode: 'development',
    output: {
        filename: '[name].js',
        path: outputPath
    },
    // 環境によってはsrc/index.ts
    entry: {
        index: './src/index.ts',
    },

    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', //loader名
                options: { //Babelの設定
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime', "babel-plugin-transform-react-jsx"],
                }
            }
        }, {
            test: [/\.ts$/],
            exclude: /node_modules | build/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'ts-loader',
                options: {
                    compilerOptions: {
                        "sourceMap": false,
                        "declarationMap": false,
                    }
                }
            }]
        }]
    },
    plugins: [],
    resolve: {
        // React × TypeScriptで使う可能性のある拡張子を全て記述
        extensions: [
            '.ts', '.js', '.tsx', '.jsx'
        ],
    },
};
module.exports = webpackConfig