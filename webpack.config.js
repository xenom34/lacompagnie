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
            },{
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer()
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                        }
                    }
                ]
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