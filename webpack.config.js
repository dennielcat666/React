var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
        historyApiFallback: true    /* настройка для BrowserRouter из 'react-router-dom' */
    },
    module: {
        // loaders: [
        //     {
        //         test: /\.js/,
        //         loaders: ['babel-loader'],
        //         include: path.join(__dirname, 'src')
        //     }
        // ]
        rules: [
            {
                test: /\.js/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}
