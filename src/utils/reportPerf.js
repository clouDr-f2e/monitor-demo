import { WebVitals } from '@zyf2e/monitor-web-performance'
import { app } from 'src/App'

const wv = new WebVitals({
    appId: 'monitor-demo',
    version: '1.0.0',
    immediately: true,
    reportCallback: (metrics) => {
        const store = app._store
        store.dispatch({
            type: 'performance/addMetrics',
            payload: metrics,
        })
    },
    needCCP: true,
    logFpsCount: 20,
    hashHistory: true,
})

export default wv
