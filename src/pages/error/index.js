import { Layout } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withPerformance from 'src/hoc/performance'

const { Content } = Layout

function Error() {
    return (
        <Content>
            <PageHeader title="Error" />
        </Content>
    )
}

export default withPerformance(Error)
