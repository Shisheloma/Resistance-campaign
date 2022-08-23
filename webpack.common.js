const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: "./src/scripts/main.js",
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif|webp)$/,
                type: 'asset/resource', 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, 
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
            new NodePolyfillPlugin(),
        ],
    infrastructureLogging: { level: 'warn' },
    stats: 'errors-warnings',
};
