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
    {
        title: 'Calculator',
        exact: true,
        path: '/calculator',
        component: lazyLoad(() => import(/* webpackChunkName:'p_calculator' */ '../pages/calculator')),
    },
    {
        title: 'Example',
        exact: true,
        path: '/example',
        component: lazyLoad(() => import(/* webpackChunkName:'p_example' */ '../pages/example')),
    },
]

export default routes
