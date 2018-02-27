const path = require('path');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    loaders: [
        // { test: /\.js$/, loader: 'buble-loader' }
    ]
  }

};
