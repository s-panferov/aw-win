module.exports = {
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    entry: {
        index: ['./index.ts']
    },
    output: {
        path: '../',
        filename: '[name].js'
    }
};
