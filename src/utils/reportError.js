import { init } from '@zyf2e/monitor-web'
import { app } from 'src/App'

init({
    dsn: 'https://chryseis.com/api',
    maxBreadcrumbs: 100,
    beforePushBreadcrumb(breadcrumb, data) {
        app._store.dispatch({
            type: 'error/addItem',
            payload: { ...data, time: +new Date() },
        })
    },
})
