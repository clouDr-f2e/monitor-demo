const error = {
    namespace: 'error',
    state: {
        actionItems: [],
    },
    reducers: {
        addItem(state, { payload }) {
            return {
                actionItems: state.actionItems.concat(payload),
            }
        },
    },
}

export default error
