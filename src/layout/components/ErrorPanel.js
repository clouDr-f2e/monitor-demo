import { Table, Layout } from 'antd'

const { Header, Content } = Layout

const columns = [
    {
        title: '错误类型',
        dataIndex: 'errorType',
    },
    {
        title: '类型',
        dataIndex: 'type',
    },
    {
        title: '描述',
        dataIndex: 'describe',
    },
    {
        title: '等级',
        dataIndex: 'level',
    },
    {
        title: '时间',
        dataIndex: 'date',
    },
]

const data = []

function ErrorPanel() {
    return (
        <Content className="w-full">
            <Header className="flex items-center text-white text-2xl bg-blue-200">Action List</Header>
            <Table columns={columns} data={data} />
        </Content>
    )
}

export default ErrorPanel
