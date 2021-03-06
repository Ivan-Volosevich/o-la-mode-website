module.exports = {
    entry: {
        'index': ['@babel/polyfill', './src/assets/js/index.js'],
        'services': ['@babel/polyfill', './src/assets/js/services.js'],
        'examples': ['@babel/polyfill', './src/assets/js/examples.js'],
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: [
                [
                    '@babel/preset-env',
                    {
                    targets: {
                        esmodules: true,
                    },
                    },
                ],
                ],
            }
            }
        }
        ],
    },
    mode: 'development'
};