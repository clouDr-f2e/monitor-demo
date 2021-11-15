import { Layout } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'

const { Content } = Layout

function Code() {
    return (
        <Content className='overflow-auto'>
            <PageHeader title='Code' />
        </Content>
    )
}

export default withBaseContent(Code)
