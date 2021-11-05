import lazyLoad from '../hoc/lazyLoad'

const routes = [
    {
        title: 'Performance',
        mode: 'exact',
        path: '/',
        component: lazyLoad(() => import(/* webpackChunkName:'p_performance' */ '../pages/performance')),
    },
    {
        title: 'Error',
        mode: 'exact',
        path: '/error',
        component: lazyLoad(() => import(/* webpackChunkName:'p_error' */ '../pages/error')),
    },
]

export default routes
