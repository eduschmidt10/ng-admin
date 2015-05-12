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
        publicPath: "http://locamlhost:8080/",
        filename: "build/ng-admin.min.js"
    },
    module: {
        loaders: [
            { test: /es6.+\.js$/, loader: 'babel-loader' },
            { test: /\.html$/, loader: 'html' }
        ]
    }
};
