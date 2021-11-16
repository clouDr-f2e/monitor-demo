import { Layout, Row, Col, Select, Divider } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import Editor from './components/Editor'
import { useState } from 'react'

const { Content } = Layout

const { Option } = Select

const networkArr = ['4g', '3g']

const endArr = ['pc', 'mobile']

function Calculator() {
    const [network, setNetwork] = useState('4g')
    const [end, setEnd] = useState('pc')

    return (
        <Content>
            <PageHeader title='Calculator' />
            <Content>
                <Row className='mb-5' gutter={16}>
                    <Col className='flex items-center' span={2}>
                        Network
                    </Col>
                    <Col span={6}>
                        <Select style={{ width: 200 }} value={network} onSelect={(val) => setNetwork(val)}>
                            {networkArr.map((n) => (
                                <Option value={n} key={n}>
                                    {n}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                    <Col className='flex items-center' span={2}>
                        End
                    </Col>
                    <Col span={6}>
                        <Select style={{ width: 200 }} value={end} onSelect={(val) => setEnd(val)}>
                            {endArr.map((n) => (
                                <Option value={n} key={n}>
                                    {n}
                                </Option>
                            ))}
                        </Select>
                    </Col>
                </Row>
                <Divider />
                <Editor />
            </Content>
        </Content>
    )
}

export default withBaseContent(Calculator)
