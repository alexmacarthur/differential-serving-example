const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfiguration = {
    mode: process.env.NODE_ENV,
    entry: {
        global: [`./assets/js/scripts.js`, `./assets/scss/style.scss`],
    },
    output: {
        filename: 'scripts.min.js',
        path: path.join(__dirname, `/assets/dist`, '/js')
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `../css/style.min.css`
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.join(__dirname, '/node_modules')]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                include: /(js)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
};

module.exports = baseConfiguration;
