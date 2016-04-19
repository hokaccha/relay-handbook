import { resolve } from 'path';

module.exports = {
  entry: './src/app.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [resolve(__dirname, 'src')],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            'transform-class-properties',
            resolve(__dirname, 'build/babel_relay_plugin'),
          ],
        },
      },
    ],
  },
};
