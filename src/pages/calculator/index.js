import { useState, useEffect, useCallback } from 'react'
import { Layout, Row, Col, Select, Divider } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import metricsConfig from 'src/constants/performance'
import { QUANTILE_AT_VALUE, VALUE_AT_QUANTILE } from 'src/utils/math'
import { determineMinMax } from 'src/utils'
import Editor from './components/Editor'

const { Content } = Layout

const { Option } = Select

const networkArr = ['4g', '3g']

const endArr = ['pc', 'mobile']

function Calculator() {
    const [network, setNetwork] = useState('4g')
    const [end, setEnd] = useState('pc')
    const [metricsData, setMetricsData] = useState([])

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

    useEffect(() => {
        const data = Object.entries(metricsConfig).map(([key, value]) => {
            return {
                name: key,
                metricScoring: value[network][end],
                value: value[network][end].median,
                score: Math.round(QUANTILE_AT_VALUE(value[network][end], value[network][end].median) * 100),
            }
        })
        setMetricsData(data)
    }, [network, end])

    return (
        <Content>
            <PageHeader title='Calculator' />
            <Content>
                <Row className='mb-5' gutter={16}>
                    <Col className='flex items-center' span={2}>
                        Network
                    </Col>
                    <Col span={6}>
                        <Select style={{ width: 200 }} value={network} onSelect={(val) => setNetwork(val)}>
                            {networkArr.map((n) => (
                                <Option value={n} key={n}>
                                    {n}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                    <Col className='flex items-center' span={2}>
                        End
                    </Col>
                    <Col span={6}>
                        <Select style={{ width: 200 }} value={end} onSelect={(val) => setEnd(val)}>
                            {endArr.map((n) => (
                                <Option value={n} key={n}>
                                    {n}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <Divider />
                <div className='mb-5 underline text-2xl'>
                    <a href='https://www.desmos.com/calculator/oqlvmezbze?lang=zh-CN' target='_blank' rel='noreferrer'>
                        computational formula
                    </a>
                </div>
                <Editor metricsData={metricsData} onScoreChange={onScoreChange} onValueChange={onValueChange} />
            </Content>
        </Content>
    )
}

export default withBaseContent(Calculator)
