import { Table, Layout } from 'antd'
import { connect } from 'dva'

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

function PerformancePanel({ performance }) {
    return (
        <Content className='w-full'>
            <Header className='flex items-center text-white text-2xl bg-blue-200'>Performance List</Header>
            <Table columns={columns} data={performance} />
        </Content>
    )
}

export default connect(({ performance }) => {
    return {
        performance,
    }
})(PerformancePanel)
