const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
      {
        test: /jquery\.min\.js$/,
        type: 'asset/source',
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000
  }
}
