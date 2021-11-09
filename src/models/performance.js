const performance = {
    namespace: 'performance',
    state: {
        metricsItems: [],
    },
    reducers: {
        addMetrics(state, { payload }) {
            return {
                ...state,
                metricsItems: state.metricsItems.concat(payload),
            }
        },
    },
    effects: {},
}

export default performance
