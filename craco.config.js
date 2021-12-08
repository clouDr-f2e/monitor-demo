const path = require('path')
const { addAfterLoader, removeLoaders, loaderByName, removePlugins, addPlugins, pluginByName } = require('@craco/craco')
const CracoLessPlugin = require('craco-less')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#93C5FD' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    babel: {
        plugins: [['import', { libraryName: 'antd', style: true }]],
    },
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const publicPath = env === 'production' ? 'https://cloudr-f2e.github.io/monitor-demo/' : './'

            if (env === 'production') {
                const fileLoader = {
                    loader: require.resolve('file-loader'),
                    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                    options: {
                        name: 'static/media/[name].[hash:8].[ext]',
                        publicPath,
                    },
                }

                removeLoaders(webpackConfig, loaderByName('file-loader'))

                addAfterLoader(webpackConfig, loaderByName('babel-loader'), fileLoader)

                removePlugins(webpackConfig, pluginByName('MiniCssExtractPlugin'))

                addPlugins(webpackConfig, [
                    new MiniCssExtractPlugin({
                        filename: 'static/css/[name].[contenthash:8].css',
                        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
                        ignoreOrder: true,
                    }),
                ])
            }

            return {
                ...webpackConfig,
                output: {
                    ...webpackConfig.output,
                    publicPath,
                },
                resolve: {
                    alias: {
                        src: path.resolve(__dirname, './src'),
                    },
                },
            }
        },
    },
}
