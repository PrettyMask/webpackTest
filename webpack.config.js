const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        }]
    },
};
