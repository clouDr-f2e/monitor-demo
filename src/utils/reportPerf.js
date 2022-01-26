import { WebVitals } from '@zyf2e/monitor-web-performance'
import { app } from 'src/App'
import metricsConfig from 'src/constants/performance'

const wv = new WebVitals({
    appId: 'monitor-demo',
    version: '1.0.0',
    immediately: true,
    reportCallback: (metrics) => {
        const store = app._store

        console.log('metrics', metrics)

        const {
            data: { name, value, score },
        } = metrics

        if (name === 'first-contentful-paint' || name === 'api-complete-time' || name === 'custom-contentful-paint') {
            store.dispatch({
                type: 'performance/calcScore',
                payload: {
                    name,
                    value,
                    score,
                },
            })
        }

        store.dispatch({
            type: 'performance/addMetrics',
            payload: metrics,
        })
    },
    isCustomEvent: true,
    logFpsCount: 20,
    hashHistory: true,
    maxWaitCCPDuration: 60 * 1000,
    scoreConfig: metricsConfig,
})

export default wv
