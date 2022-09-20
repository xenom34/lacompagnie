const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.tsx',
    devtool:'inline-source-map',
    output: {
        //filename: 'main.js',
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module:{
        rules:[
            {
                test: /\.css$/,     //feuille de style
                use:[
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,  //chargement d'une image via la feuille de stylel
                use:[
                    'file-loader',
                ]
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        contentBase:'./dist',
    }
};