import { QUANTILE_AT_VALUE } from 'src/utils/math'
import metricsConfig from 'src/constants/performance'

const performance = {
    namespace: 'performance',
    state: {
        metricsItems: [],
        scores: [],
    },
    reducers: {
        addMetrics(state, { payload }) {
            return {
                ...state,
                metricsItems: state.metricsItems.concat(payload),
            }
        },
        calcScore(state, { payload }) {
            const { name, value } = payload

            const time = typeof value !== 'number' ? value.time : value

            const { median, p10, weight } = metricsConfig[name?.replace(/(-|)([a-z])[a-z]*/g, '$2')]

            const score = (QUANTILE_AT_VALUE({ median, p10 }, time) * 100).toFixed(2)

            return {
                ...state,
                scores: state.scores.concat({
                    title: name,
                    score,
                    value: time,
                    weight,
                    key: name,
                }),
            }
        },
    },
    effects: {},
}

export default performance
