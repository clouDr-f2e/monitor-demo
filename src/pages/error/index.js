import { Layout } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'

const { Content } = Layout

function Error() {
    return (
        <Content>
            <PageHeader title='Error' />
        </Content>
    )
}

export default withBaseContent(Error)
