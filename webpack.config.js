const path = require('path');
const webpack = require('webpack');

var webpackConfig = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            use: [{
                loader: 'babel-loader'
            }]
        },{
            test: /\.css$/,
            include: path.join(__dirname, 'src'),
            use: ['style-loader','css-loader']
        }]
    }
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false
    })
  ])
} else {
    webpackConfig.devtool = 'source-map';
    for(var k in webpackConfig.entry) {
        webpackConfig.entry[k] = [
            'react-hot-loader/patch', 
            'webpack-dev-server/client?http://localhost:3000', 
            'webpack/hot/only-dev-server'
        ].concat(webpackConfig.entry[k])
    }
    webpackConfig.plugins = (webpackConfig.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin()
    ])
}

module.exports = webpackConfig