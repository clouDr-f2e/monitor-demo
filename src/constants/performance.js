const metricsConfig = {
    fcp: {
        '4g': {
            mobile: {
                weight: 0.2,
                median: 4500,
                p10: 1500,
            },
            pc: {
                weight: 0.2,
                median: 4000,
                p10: 1000,
            },
        },
        '3g': {
            mobile: {
                weight: 0.2,
                median: 6000,
                p10: 3000,
            },
            pc: {
                weight: 0.2,
                median: 6000,
                p10: 2500,
            },
        },
    },
    act: {
        '4g': {
            mobile: {
                weight: 0.3,
                median: 6500,
                p10: 2500,
            },
            pc: {
                weight: 0.3,
                median: 6000,
                p10: 2000,
            },
        },
        '3g': {
            mobile: {
                weight: 0.3,
                median: 8000,
                p10: 4000,
            },
            pc: {
                weight: 0.3,
                median: 7500,
                p10: 3500,
            },
        },
    },
    ccp: {
        '4g': {
            mobile: {
                weight: 0.5,
                median: 7500,
                p10: 3500,
            },
            pc: {
                weight: 0.5,
                median: 7000,
                p10: 3000,
            },
        },
        '3g': {
            mobile: {
                weight: 0.5,
                median: 9000,
                p10: 5000,
            },
            pc: {
                weight: 0.5,
                median: 8500,
                p10: 4500,
            },
        },
    },
}

export default metricsConfig
