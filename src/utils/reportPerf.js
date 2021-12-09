import { WebVitals } from '@zyf2e/monitor-web-performance'
import { app } from 'src/App'

const wv = new WebVitals({
    appId: 'monitor-demo',
    version: '1.0.0',
    immediately: true,
    reportCallback: (metrics) => {
        const store = app._store

        const {
            data: { name, value },
        } = metrics

        if (name === 'first-contentful-paint' || name === 'api-complete-time' || name === 'custom-contentful-paint') {
            store.dispatch({
                type: 'performance/calcScore',
                payload: {
                    name,
                    value,
                },
            })
        }

        store.dispatch({
            type: 'performance/addMetrics',
            payload: metrics,
        })
    },
    needCCP: true,
    logFpsCount: 20,
    hashHistory: true,
    maxWaitCCPDuration: 60 * 1000,
})

export default wv
