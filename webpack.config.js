const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    moviePreview: ['@babel/polyfill', '../movie-preview/client/src/index.jsx'],
    photoCarousel: '../photo-carousel/client/index.jsx',
    castPhotos: '../castphotos/client/index.jsx',
    audienceReviews: '../AUDIENCE-REVIEWS/client/src/index.jsx',
    criticReviews: '../CRITIC_REVIEWS/client/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin(),
  ],
  // optimization: {
  //   runtimeChunk: {
  //     name: 'single',
  //   },
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 0,
  //   },
  // },
};
