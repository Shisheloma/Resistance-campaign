const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: 'assets/[name].[hash][ext][query]',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
        }), 
    ],
    optimization: {
        runtimeChunk: 'single',
        nodeEnv: 'development',
    },
    module: {
        rules: [
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
                                }
                            ]
                        },
                        // disable manifest link in development mode
                        preprocessor: (content, loaderContext) => {
                            let filtered;
                            try {
                                filtered = content.replace('rel="manifest"', '')
                            } catch (error) {
                              loaderContext.emitError(error);
                              return content;
                            } 
                            return filtered;
                        }
                    }
                }
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    "style-loader",  
                    "css-loader",   
                    "sass-loader", 
                ]
            }, 
        ] 
    }
};
