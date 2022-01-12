import { useMemo } from 'react'
import { Table } from 'antd'
import { determineMinMax } from 'src/utils'
import metricsMap from 'src/constants/metrics'

function Editor({ metricsData = [], onScoreChange, onValueChange }) {
    const dataSource = useMemo(() => {
        const weightMax = Math.max(...metricsData.map((m) => m.metricScoring.weight))
        return metricsData.map((data, i) => ({ ...data, weightMax, key: i }))
    }, [metricsData])

    const columns = useMemo(
        () => [
            {
                title: 'metrics',
                dataIndex: 'metrics',
                key: 'metrics',
                render: (text, record) => <div>{`${metricsMap[record.name]}（${record.name}）`}</div>,
            },
            {
                title: 'Value',
                dataIndex: 'value',
                key: 'value',
                render: (text, { name, metricScoring, value }) => {
                    const { min, max, step } = determineMinMax(metricScoring)

                    return (
                        <div className='flex flex-col'>
                            <input
                                type='range'
                                min={min}
                                value={value}
                                max={max}
                                step={step}
                                className=''
                                onInput={(e) => onValueChange(name, e.target?.valueAsNumber)}
                            />
                            <output className='text-right'>{`${value.toLocaleString()}ms`}</output>
                        </div>
                    )
                },
            },
            {
                title: 'Metric Score',
                dataIndex: 'score',
                key: 'score',
                render: (text, { name, metricScoring, score, weightMax }) => {
                    return (
                        <div className='flex flex-col items-end'>
                            <input
                                type='range'
                                style={{ width: `${(metricScoring.weight / weightMax) * 100}%` }}
                                value={score}
                                onInput={(e) => onScoreChange(name, e.target?.valueAsNumber)}
                            />
                            <output className='text-right'>{score}</output>
                        </div>
                    )
                },
            },
            {
                title: 'Weighting',
                dataIndex: 'weight',
                key: 'weight',
                align: 'right',
                render: (text, { metricScoring }) => <span>{metricScoring.weight * 100}%</span>,
            },
        ],
        [onScoreChange, onValueChange]
    )

    return <Table pagination={false} columns={columns} dataSource={dataSource} />
}

export default Editor
