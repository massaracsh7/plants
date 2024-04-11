const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
  devServer: {
    open: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
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
    clean: true, // Добавлено для очистки папки dist, заменяет CleanWebpackPlugin для Webpack 5
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' }),
    new HtmlWebpackPlugin({
      favicon: "./src/assets/favicon/favicon.ico",
      template: './src/index.html',
      inject: 'body', // Изменено с head на body
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
        },
        {
          from: 'src/assets/fonts',
          to: 'fonts',
        }
      ],
    }),
  ],
  resolve: {
    extensions: ['.js'],
  },
  ...devServer(development),
});
