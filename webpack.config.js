const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['styled-components'],
    photoCarousel: '../photo-carousel/client/components/stylesheet.jsx',
    castPhotos: '../castphotos/client/styled.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  optimization: {
    runtimeChunk: {
      name: 'vendor',
    },
    splitChunks: {
      cacheGroups: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all',
        minSize: 0,
      },
    },
    resolve: {
      alias: {
        'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
      },
    },
  },
};
