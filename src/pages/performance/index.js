import { Layout } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withPerformance from 'src/hoc/performance'

const { Content } = Layout

function Performance() {
    return (
        <Content>
            <PageHeader title="Performance" />
        </Content>
    )
}

export default withPerformance(Performance)
