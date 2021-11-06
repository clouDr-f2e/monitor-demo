import lazyLoad from 'src/hoc/lazyLoad'

const routes = [
    {
        title: 'Performance',
        exact: true,
        path: '/',
        component: lazyLoad(() => import(/* webpackChunkName:'p_performance' */ '../pages/performance')),
    },
    {
        title: 'Error',
        exact: true,
        path: '/error',
        component: lazyLoad(() => import(/* webpackChunkName:'p_error' */ '../pages/error')),
    },
]

export default routes
