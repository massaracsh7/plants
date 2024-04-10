const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: ['src/**/*'],
  },
};

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    main: './src/index.js', 
    styles: './src/scss/style.scss',
  },
  output: {
    filename: '[name].[contenthash].js', 
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }), 
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon/favicon.ico",
      template: './src/index.html',
      inject: 'head', 
      scriptLoading: 'defer',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'images',
        },
        {
          from: 'src/assets/favicon/favicon.ico',
          to: '',
        }
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  ...devServer(development)
});
