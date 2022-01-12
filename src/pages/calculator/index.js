import './index.less'
import { useState, useEffect, useCallback } from 'react'
import { Layout, Divider } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import metricsConfig from 'src/constants/performance'
import { QUANTILE_AT_VALUE, VALUE_AT_QUANTILE } from 'src/utils/math'
import { determineMinMax } from 'src/utils'
import MetricsTable from './components/MetricsTable'
import Editor from './components/Editor'

const { Content } = Layout

function Calculator() {
    const [metricsData, setMetricsData] = useState([])

    const [metrics, setMetrics] = useState(metricsConfig)

    const onValueChange = useCallback(
        (name, val) => {
            const data = metricsData.map((metrics) => {
                if (metrics.name === name) {
                    return {
                        ...metrics,
                        value: val,
                        score: Math.round(QUANTILE_AT_VALUE(metrics.metricScoring, val) * 100),
                    }
                }

                return metrics
            })

            setMetricsData(data)
        },
        [metricsData]
    )

    const onScoreChange = useCallback(
        (name, score) => {
            const data = metricsData.map((metrics) => {
                if (metrics.name === name) {
                    const { min, max } = determineMinMax(metrics.metricScoring)
                    let computedValue = VALUE_AT_QUANTILE(metrics.metricScoring, score / 100)
                    computedValue = Math.max(Math.min(computedValue, max), min)

                    return {
                        ...metrics,
                        value: Math.round(computedValue),
                        score: score,
                    }
                }

                return metrics
            })

            setMetricsData(data)
        },
        [metricsData]
    )

    const onMetricsChange = useCallback((metrics) => {
        setMetrics((preState) => {
            return {
                ...preState,
                ...metrics,
            }
        })
    }, [])

    useEffect(() => {
        const data = Object.entries(metrics).map(([key, value]) => {
            return {
                name: key,
                metricScoring: value,
                value: value.median,
                score: Math.round(QUANTILE_AT_VALUE(value, value.median) * 100),
            }
        })
        setMetricsData(data)
    }, [metrics])

    return (
        <Content>
            <PageHeader title='Calculator' />
            <Content>
                <div className='mb-5 underline text-2xl'>
                    <a href='https://www.desmos.com/calculator/oqlvmezbze?lang=zh-CN' target='_blank' rel='noreferrer'>
                        computational formula
                    </a>
                </div>
                <MetricsTable metricsConfig={metrics} onMetricsChange={onMetricsChange} />
                <Divider />
                <Editor metricsData={metricsData} onScoreChange={onScoreChange} onValueChange={onValueChange} />
            </Content>
        </Content>
    )
}

export default withBaseContent(Calculator)
