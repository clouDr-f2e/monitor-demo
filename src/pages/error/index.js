import { Layout, List, Card, Button, message } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import { app } from 'src/App'

const { Content } = Layout

const ErrorTypeData = [
    {
        title: '跳转页面',
        action: () => app._history.push('/'),
    },
    {
        title: '触发Xhr请求',
    },
    {
        title: '触发Xhr请求Error',
    },
    {
        title: '触发Fetch请求',
    },
    {
        title: '触发Fetch请求Error',
    },
    {
        title: '触发Js Error',
        action: () => {
            throw new Error('js error')
        },
    },
    {
        title: '触发unhandledrejection',
        action: () => {
            return new Promise((resolve) => {
                resolve('reject')
            }).then(() => {
                throw new Error('reject')
            })
        },
    },
    {
        title: '触发用户事件',
        action: () => {
            message.success({ content: 'hello world', className: 'monitor-message' }).then((r) => {})
        },
    },
]

function ItemRender({ title, action }) {
    return (
        <Card title={title}>
            <Button type='primary' onClick={action}>
                have a try
            </Button>
        </Card>
    )
}

function Error() {
    return (
        <Content className='overflow-auto'>
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
