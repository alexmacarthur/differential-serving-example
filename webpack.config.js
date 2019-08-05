const merge = require('webpack-merge');
const baseConfiguration = require("./webpack.base");

const modernConfiguration = merge.smart(baseConfiguration, {
    output: {
        filename: 'scripts.modern.min.js',
    }
});

module.exports = [
    baseConfiguration, 
    modernConfiguration
];
