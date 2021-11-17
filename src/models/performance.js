import { QUANTILE_AT_VALUE } from 'src/utils/math'
import metricsConfig from 'src/constants/performance'
import { os } from 'src/utils'

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

            const {
                data: {
                    value: { effectiveType },
                },
            } = state.metricsItems.find((item) => item.data.name === 'network-information')

            const { median, p10, weight } =
                metricsConfig[name.replace(/(-|)([a-z])[a-z]*/g, '$2')][effectiveType][os.isPc ? 'pc' : 'mobile']

            const score = (QUANTILE_AT_VALUE({ median, p10 }, value) * 100).toFixed(2)

            return {
                ...state,
                scores: state.scores.concat({
                    title: name,
                    score,
                    value,
                    weight,
                    key: name,
                }),
            }
        },
    },
    effects: {},
}

export default performance
