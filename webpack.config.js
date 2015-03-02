/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

    output: {
        filename: 'webpack.js',
        path: "./grails-app/assets/javascripts",
        publicPath: '/assets/'
    },

    cache: true,
    debug: true,
    devtool: false,

    context: __dirname + '/grails-app/assets/javascripts',
    entry: './application',

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        root: [
            __dirname + '/assets-src/bower/',
            __dirname + '/node_modules/',
            __dirname + '/scripts/'
        ],
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['assets/bower', 'node_modules']
    },
    module: {
        preLoaders: [{
            test: '\\.js$',
            exclude: 'node_modules',
            loader: 'jshint'
        }],
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader?harmony'
        }],
        noParse: /\.min\.js/
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

};
