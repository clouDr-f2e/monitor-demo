import { VALUE_AT_QUANTILE } from './math'

const os = (function () {
    const ua = navigator.userAgent

    const isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isTablet =
            /(?:iPad|PlayBook)/.test(ua) ||
            (isAndroid && !/(?:Mobile)/.test(ua)) ||
            (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc,
    }
})()

function determineMinMax(metricScoring) {
    const valueAtScore100 = VALUE_AT_QUANTILE(metricScoring, 0.995)
    const valueAtScore5 = VALUE_AT_QUANTILE(metricScoring, 0.05)

    let min = Math.floor(valueAtScore100 / 1000) * 1000
    let max = Math.ceil(valueAtScore5 / 1000) * 1000
    let step = 10

    // Special handling for CLS
    if (metricScoring.units === 'unitless') {
        min = 0
        max = Math.ceil(valueAtScore5 * 100) / 100
        step = 0.01
    }

    return {
        min,
        max,
        step,
    }
}

export { os, determineMinMax }
