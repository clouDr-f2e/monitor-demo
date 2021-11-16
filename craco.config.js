const path = require('path')
const { addAfterLoader, removeLoaders, loaderByName } = require('@craco/craco')
const CracoLessPlugin = require('craco-less')

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
