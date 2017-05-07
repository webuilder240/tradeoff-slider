var path = require('path');
module.exports = {
    // webpack処理の起点となるファイルの指定と出力アイテムの指定
    entry: {
        app_start:'./src/main.ts'
    },
    output: {
      path: '/build',        // webpack処理したファイルの出力先フォルダ
      publicPath: '/js',     // webpack処理したファイルの公開時のフォルダ
      filename: '[name].js'  // webpack処理したファイルのファイル名
                             // [name]はentry設定での出力アイテム名が自動的に適用される
    },
    devServer: {
      contentBase: 'public'  // webpack-dev-serverの公開フォルダ
    },
    resolve: {
        // requireしたファイル（Webpack処理の対象ファイル）に適用される拡張子
        // 左端の空文字列はrequireで拡張子をつけて指定した場合に必要となる
        extensions:['','.ts','.webpack.js','.web.js','.js']
    },
    module: {
         // ローダー(Webpack処理の内容を決定するモジュール)の設定
         loaders: [
              // ファイル名末尾が".ts"のファイルをコンパイルする
              {test: /\.ts$/,loader: 'ts-loader' }
         ]
    }
}
