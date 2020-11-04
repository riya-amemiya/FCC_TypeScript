module.exports = {
    // 本番にデプロイするときはモード値を production に設定
    // development に設定すると元のファイルとの関連性がわかるソースマップと一緒に出力される
    mode: 'development',
    output: {
        filename: '[name].js',
        path: __dirname + "/dist"
    },
    // 環境によってはsrc/index.ts
    entry: {
        index: './build/index.js'
    },

    module: {
        rules: [{
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
    resolve: {
        // React × TypeScriptで使う可能性のある拡張子を全て記述
        extensions: [
            '.ts', '.js', '.tsx', '.jsx'
        ],
    },
};