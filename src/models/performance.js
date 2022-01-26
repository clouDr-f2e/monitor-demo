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
            const { name, value, score } = payload

            const time = typeof value !== 'number' ? value.time : value

            const { weight } = metricsConfig[name?.replace(/(-|)([a-z])[a-z]*/g, '$2')]

            return {
                ...state,
                scores: state.scores.concat({
                    title: name,
                    score: score.toFixed(2),
                    value: time.toFixed(2),
                    weight,
                    key: name,
                }),
            }
        },
    },
    effects: {},
}

export default performance
