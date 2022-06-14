const path = require('path');

module.exports = {
  entry: './sass/',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};