const metricsConfig = {
    fcp: {
        weight: 0.2,
        median: 3000,
        p10: 1800,
    },
    act: {
        weight: 0.3,
        median: 4000,
        p10: 2000,
    },
    ccp: {
        weight: 0.5,
        median: 4300,
        p10: 2300,
    },
}

export default metricsConfig
