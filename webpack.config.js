module.exports = {
  context: __dirname + '/app/js',
  entry: './main',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js'
  },
  mode: 'none',
  // webpack watch option
  watchOptions: {
    // 最初のファイルが変更されたら、再構築する前に遅延を追加します。これにより、webpackは、この期間中に行われた他の変更を1つの再構築に集約できます。ミリ秒単位で値を渡します。
    aggregateTimeout: 200,
    // ポーリング間隔　true or ミリ秒
    poll: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};