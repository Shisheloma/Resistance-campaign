const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].bundle.js', 
        path: path.resolve(__dirname, "build"), 
        assetModuleFilename: asset => { 
            // special rule for manifest.json'
            if (asset.filename.includes('manifest.json')) { 
                return '[name].[hash][ext][query]'
            }
            return 'assets/[name].[hash][ext][query]'  
        }
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin(),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/serviceWorker.js',
            swDest: 'sw.js',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/favicons/favicon-144.png", to: "assets" },
                { from: "./src/favicons/favicon-512.png", to: "assets" },
                { from: "./src/favicons/favicon-512_maskable.png", to: "assets" }
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",  
                    "sass-loader"  
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        sources: {
                            list: [
                                // spread default supported tags and attributes
                                "...",
                                // custom attributes for lazy loading
                                {
                                    tag: "img",
                                    attribute: "data-src",
                                    type: "src",
                                },
                                { 
                                    attribute: "data-background-image",
                                    type: "src",
                                },
                            ]
                        }
                    }
                }
            },
        ]
    }
};
