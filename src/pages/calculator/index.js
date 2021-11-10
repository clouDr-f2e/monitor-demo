import { Layout } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'

const { Content } = Layout

function Calculator() {
    return (
        <Content>
            <PageHeader title='Calculator' />
        </Content>
    )
}

export default withBaseContent(Calculator)
