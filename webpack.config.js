const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
    },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  // For debugging
  devtool: "source-map",
  // Server Config
  devServer: {
    static: {
        directory: path.resolve(__dirname, "dist")
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  mode: "development",
  module: {
    rules: [
        // CSS Loader
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        // Add Babel for backwards compatibility.
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
       },
       // Image loader
       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "2-Do",
      filename: "index.html",
      template: "./src/template.html"
    })
  ]
};