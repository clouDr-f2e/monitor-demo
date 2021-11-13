import { Layout, List, Card, Button } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import { app } from 'src/App'

const { Content } = Layout

const ErrorTypeData = [
    {
        title: '跳转页面',
        action: () => app._history.push('/performance'),
    },
    {
        title: '触发Xhr请求',
    },
    {
        title: '触发Fetch请求',
    },
    {
        title: '触发Js Error',
        action: () => {
            throw new Error('js error')
        },
    },
    {
        title: '触发unhandledrejection',
    },
    {
        title: '触发用户事件',
    },
]

function ItemRender({ title, action }) {
    return (
        <Card title={title}>
            <Button type='primary' onClick={action}>
                trigger
            </Button>
        </Card>
    )
}

function Error() {
    return (
        <Content>
            <PageHeader title='Error' />
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={ErrorTypeData}
                renderItem={(item) => (
                    <List.Item>
                        <ItemRender {...item} />
                    </List.Item>
                )}
            />
        </Content>
    )
}

export default withBaseContent(Error)
