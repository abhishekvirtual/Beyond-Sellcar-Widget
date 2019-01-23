var fs = require('fs');
var path = require('path');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    mode: 'development',
    devtool:'inline-source-map',
    entry:[
    path.resolve(__dirname,'buildScripts/index')
    ],
    target:'node',
    resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    devServer: {
      inline: false,
      contentBase: "./dist",
    },
    output:{
      path:path.resolve(__dirname,'dist'),
      publicPath:'/',
      filename:'server.js',
      globalObject: 'self'
    },
    module:{
      rules:[
        {
          test: /\.tsx?$/,
          exclude:/(node_modules|bower_components)/,
          loader: 'ts-loader',
        },
        {
          test: /\.json5$/,
          exclude:/(node_modules|bower_components)/,
          loader: 'json5-loader',
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
      }
      ]
    },
    externals:nodeModules
}

