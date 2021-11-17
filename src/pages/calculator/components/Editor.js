import { useMemo } from 'react'
import { Table } from 'antd'
import { determineMinMax } from 'src/utils'

function Editor({ metricsData = [], onScoreChange, onValueChange }) {
    const dataSource = useMemo(() => {
        const weightMax = Math.max(...metricsData.map((m) => m.metricScoring.weight))
        return metricsData.map((data) => ({ ...data, weightMax }))
    }, [metricsData])

    const columns = [
        {
            title: 'metrics',
            dataIndex: 'metrics',
            key: 'metrics',
            render: (text, record) => <div>{record.name}</div>,
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
            render: (text, { name, metricScoring, value }) => {
                const { min, max, step } = determineMinMax(metricScoring)

                return (
                    <>
                        <input
                            type='range'
                            min={min}
                            value={value}
                            max={max}
                            step={step}
                            className=''
                            onInput={(e) => onValueChange(name, e.target.valueAsNumber)}
                        />
                        <output className='value-output'>{`${value.toLocaleString()}ms`}</output>
                    </>
                )
            },
        },
        {
            title: 'Metric Score',
            dataIndex: 'score',
            key: 'score',
            render: (text, { name, metricScoring, score, weightMax }) => {
                return (
                    <>
                        <input
                            type='range'
                            className={` metric-score`}
                            style={{ width: `${(metricScoring.weight / weightMax) * 100}%` }}
                            value={score}
                            onInput={(e) => onScoreChange(name, e.target.valueAsNumber)}
                        />
                        <output className={` score-output`}>{score}</output>
                    </>
                )
            },
        },
        {
            title: 'Weighting',
            dataIndex: 'weight',
            key: 'weight',
            render: (text, { metricScoring }) => <span className={` weight-text`}>{metricScoring.weight * 100}%</span>,
        },
    ]

    return <Table pagination={false} columns={columns} dataSource={dataSource} />
}

export default Editor
