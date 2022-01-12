import { useMemo } from 'react'
import { Table, Layout, Descriptions } from 'antd'
import { connect } from 'dva'
import format from 'date-fns/format'

const { Content, Header } = Layout

const metricsMap = {
    'page-information': '页面信息',
    'network-information': '网络信息',
    'device-information': '设备信息',
    'navigation-timing': '导航加载时间',
    'first-paint': '第一个像素渲染时间',
    'first-contentful-paint': '第一个元素渲染时间',
    'first-input-delay': '用户第一次输入延迟',
    'largest-contentful-paint': '最大元素渲染时间',
    'custom-contentful-paint': '页面完成时渲染时间',
    fps: '页面刷新率',
    'api-complete-time': '首屏接口请求完成时间',
    'resource-flow': '资源加载列表',
    'cumulative-layout-shift': '页面意外位移量',
}

const columns = [
    {
        title: '指标',
        dataIndex: 'metrics',
        key: 'metrics',
    },
    {
        title: '描述',
        dataIndex: 'describe',
        key: 'describe',
    },
    {
        title: '会话id',
        dataIndex: 'sectionId',
        key: 'sectionId',
    },
    {
        title: '上报时间',
        dataIndex: 'time',
        key: 'time',
    },
]

function ExpandableItem({ data, contentStyle, size }) {
    if (!isNaN(Number(data))) {
        return (
            <Descriptions bordered contentStyle={contentStyle} size={size}>
                <Descriptions.Item label='value'>{data}</Descriptions.Item>
            </Descriptions>
        )
    } else if (Array.isArray(data)) {
        return data.map((item, i) => (
            <Descriptions className='mb-5' key={i} bordered contentStyle={contentStyle} size={size} title={item.name}>
                {Object.entries(JSON.parse(JSON.stringify(item))).map(([key, val]) => (
                    <Descriptions.Item label={key} key={key}>
                        {val}
                    </Descriptions.Item>
                ))}
            </Descriptions>
        ))
    } else {
        return (
            <Descriptions bordered contentStyle={contentStyle} size={size}>
                {Object.entries(data).map(([key, val]) => (
                    <Descriptions.Item label={key} key={key}>
                        {val}
                    </Descriptions.Item>
                ))}
            </Descriptions>
        )
    }
}

function ExpandableRender({ name, value }) {
    return <ExpandableItem name={name} data={value} contentStyle={{ backgroundColor: '#fff' }} size='small' />
}

function PerformancePanel({ performance }) {
    const dataSource = useMemo(() => {
        const { metricsItems } = performance
        return metricsItems.map((item, i) => {
            const {
                sectionId,
                appId,
                data: { name, value },
                timestamp,
            } = item

            const describe = metricsMap[name]

            return {
                key: i,
                appId,
                sectionId,
                metrics: name,
                describe,
                value,
                time: format(timestamp, 'yyyy-MM-dd HH:mm:ss'),
            }
        })
    }, [performance])

    return (
        <Content className='flex flex-col w-full'>
            <Header className='flex items-center text-white text-2xl bg-blue-200 shadow-sm'>Performance Metrics</Header>
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

export default connect(({ performance }) => {
    return {
        performance,
    }
})(PerformancePanel)
