var sources = [
    './src/javascripts/ng-admin.js'
];

if (process.env.NODE_ENV !== 'production') { // for live reload
    sources.push('webpack-dev-server/client?http://localhost:8080');
}

module.exports = {
    entry: {
        'ng-admin': sources
    },
    output: {
        filename: "build/ng-admin.min.js",
        publicPath: "http://localhost:8080/"
    },
    module: {
        loaders: [
            { test: /es6.+\.js$/, loader: 'babel-loader' },
            { test: /\.html$/, loader: 'ngtemplate-loader!html' }
        ]
    }
};
