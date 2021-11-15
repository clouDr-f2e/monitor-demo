const path = require('path')
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
            return {
                ...webpackConfig,
                output: {
                    publicPath: './',
                    filename: 'static/js/[name].[hash:8].bundle.js',
                    path: path.resolve(__dirname, 'build'),
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
