const path = require('path');

module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/styles/_variables.less')],
        },
    },
};
