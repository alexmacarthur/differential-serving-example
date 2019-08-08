const merge = require('webpack-merge');
const baseConfiguration = require("./webpack.base");

const modernConfiguration = merge.smart(baseConfiguration, {
    output: {
        filename: 'scripts.modern.min.js',
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /(js)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true, 
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    browsers: [
                                        'Edge >= 16',
                                        'Firefox >= 60',
                                        'Chrome >= 61',
                                        'Safari >= 11',
                                        'Opera >= 48'
                                    ]
                                }
                            }]
                        ]
                    }
                }
            }
        ]
    }
});


// We're only interested in dealing with JS files, so remove any other entry points.
modernConfiguration.entry.global = modernConfiguration.entry.global.filter(file => file.includes('.js'));

module.exports = [
    baseConfiguration, 
    modernConfiguration
];
