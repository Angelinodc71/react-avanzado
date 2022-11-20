const path = require('path');

/** @type {import('webpack').Configuration} */

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                exclude: /node_modules|\.d\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false,
                        }
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    //   devServer: {
    //     static: path.join(__dirname, "dist"),
    //     open: true,
    //     compress: true,
    //     port: 8080,
    //     // options: {
    //     //     runtime: 'automatic',
    //     // }
    //   },
}