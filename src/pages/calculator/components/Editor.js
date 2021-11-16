function Metric({ weightMax, metricScoring }) {
    return <div>Metric</div>
}

function Editor({ metricsData = [] }) {
    return (
        <table className='w-full table-fixed'>
            <thead>
                <tr className='table-row'>
                    <th className='table-cell' colSpan='2' />
                    <th className='table-cell'>Value</th>
                    <th className='table-cell' />
                    <th className='table-cell'>Metric Score</th>
                    <th className='table-cell'>Weighting</th>
                </tr>
            </thead>
            <tbody>
                {metricsData.map((metric) => {
                    return <Metric metricScoring={metric.metricScoring} {...metric} />
                })}
            </tbody>
        </table>
    )
}

export default Editor
