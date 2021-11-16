import { useMemo } from 'react'
import { Table, Layout, Tag, Descriptions } from 'antd'
import cls from 'classnames'
import { connect } from 'dva'
import format from 'date-fns/format'
import { isString } from '@craco/craco/lib/utils'

const { Header, Content } = Layout

const columns = [
    {
        title: '类别',
        dataIndex: 'category',
        key: 'category',
        render: (category) => {
            const iconMap = {
                user: 'icon-actions',
                http: 'icon-http',
                exception: 'icon-Exception',
                debug: 'icon-debug',
            }

            return <i className={cls('icon', 'iconfont', iconMap[category], 'text-xl')} />
        },
    },
    {
        title: '类型',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: '等级',
        dataIndex: 'level',
        key: 'level',
        render: (level) => <Tag color='#93C5FD'>{level}</Tag>,
    },
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    },
]

function ExpandableItem({ data, contentStyle, size }) {
    if (isString(data)) {
        return (
            <Descriptions bordered contentStyle={contentStyle} size={size}>
                <Descriptions.Item label='value'>{data}</Descriptions.Item>
            </Descriptions>
        )
    } else {
        return (
            <Descriptions bordered contentStyle={contentStyle} size={size}>
                {Object.entries(data).map(([key, val]) => (
                    <Descriptions.Item label={key} key={key}>
                        {JSON.stringify(val)}
                    </Descriptions.Item>
                ))}
            </Descriptions>
        )
    }
}

function ExpandableRender({ data }) {
    return <ExpandableItem data={data} contentStyle={{ backgroundColor: '#fff' }} size='small' />
}

function ErrorPanel({ actionItems }) {
    const dataSource = useMemo(() => {
        return actionItems.map((item, i) => {
            const { type, category, data, level, time } = item

            return {
                key: i,
                type,
                category,
                level,
                time: format(time, 'yyyy-MM-dd HH:mm:ss'),
                data,
            }
        })
    }, [actionItems])

    return (
        <Content className='flex flex-col w-full h-full '>
            <Header className='flex items-center text-white text-2xl bg-blue-200 shadow-sm'>Action List</Header>
            <div className='flex-1 overflow-auto'>
                <Table
                    pagination={false}
                    columns={columns}
                    dataSource={dataSource}
                    sticky
                    expandable={{
                        expandedRowRender: (record) => <ExpandableRender {...record} />,
                    }}
                />
            </div>
        </Content>
    )
}

export default connect(({ error }) => {
    const { actionItems } = error
    return { actionItems }
})(ErrorPanel)
