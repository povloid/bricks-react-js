const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bricks-react.js',
        path: path.resolve(__dirname, 'lib'),
        library: { name: 'bricksReact', type: 'umd' }
    },
    externals: {
        react: 'react',
        'bricks-fp': 'bricks-fp',
        'bricks-path-store': 'bricks-path-store'
    },
    mode: 'production'
}
