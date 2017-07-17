var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.css$/,
      loaders: ['style', 'css'],
      include: path.join(__dirname, 'src')
    }]
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}

// "dependencies": {
  //   "react": "^15.0.1",
  //   "react-dom": "^15.0.1",
  //   "react-redux": "^4.4.5",
  //   "redux": "^3.4.0",
  //   "whatwg-fetch": "^0.11.0"
  // },
  // "devDependencies": {
  //   "babel-core": "^6.7.6",
  //   "babel-loader": "^6.2.4",
  //   "babel-preset-es2015": "^6.6.0",
  //   "babel-preset-react": "^6.5.0",
  //   "babel-plugin-react-transform": "^2.0.2",
  //   "react-hot-loader": "^1.3.0",
  //   "css-loader": "^0.23.1",
  //   "file-loader": "^0.8.5",
  //   "cross-env": "^1.0.7",
  //   "style-loader": "^0.13.1",
  //   "webpack": "^1.12.15",
  //   "webpack-dev-server": "^1.14.1",
  //   "url-loader": "^0.5.7"
  // } r