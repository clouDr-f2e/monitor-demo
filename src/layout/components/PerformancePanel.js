import { Table, Layout } from 'antd'

const { Content, Header } = Layout

const columns = [
    {
        title: '指标',
        dataIndex: 'metrics',
    },
    {
        title: '耗费时间',
        dataIndex: 'time',
    },
    {
        title: '描述',
        dataIndex: 'describe',
    },
    {
        title: '等级',
        dataIndex: 'level',
    },
]

const data = []

function PerformancePanel() {
    return (
        <Content className="w-full">
            <Header className="flex items-center text-white text-2xl bg-blue-200">Performance List</Header>
            <Table columns={columns} data={data} />
        </Content>
    )
}

export default PerformancePanel
