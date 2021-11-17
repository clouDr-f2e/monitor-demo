import { useCallback, useEffect, useState } from 'react'
import { connect } from 'dva'
import { Layout, Image, Table, Form, Switch } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import request from 'src/utils/request'
import placeholderImg from 'src/assets/images/img.png'

const { Content } = Layout

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Score',
        dataIndex: 'score',
    },
    {
        title: 'Value',
        dataIndex: 'value',
    },
    {
        title: 'Weight',
        dataIndex: 'weight',
    },
]

function Performance({ scores }) {
    const [data, setData] = useState({
        'img-example': placeholderImg,
        'img-navigation': placeholderImg,
        'img-fcp': placeholderImg,
        'img-lcp': placeholderImg,
    })

    const [form] = Form.useForm()

    const remoteSource = useCallback(() => {
        const imageProtocol = form.getFieldValue('imageProtocol')
        const url = imageProtocol ? './data/performance.json' : './data/performance-http.json'
        request.get(url).then(({ data }) => {
            setData(data)
        })
    }, [form])

    const onValuesChange = useCallback(
        (changedValues, allValues) => {
            remoteSource()
        },
        [remoteSource]
    )

    useEffect(() => {
        remoteSource()
    }, [remoteSource])

    return (
        <Content className='overflow-auto'>
            <PageHeader title='Performance' />
            <Content>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Operation</h1>
                    <Form form={form} layout='inline' onValuesChange={onValuesChange}>
                        <Form.Item label='图片协议' name='imageProtocol' valuePropName='checked' initialValue={true}>
                            <Switch checkedChildren='https' unCheckedChildren='http' />
                        </Form.Item>
                        <Form.Item label='图片格式' name='imageExt' valuePropName='checked' initialValue={true}>
                            <Switch checkedChildren='png' unCheckedChildren='webp' />
                        </Form.Item>
                    </Form>
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'> Performance Score</h1>
                    <Table
                        pagination={false}
                        columns={columns}
                        dataSource={scores}
                        bordered
                        summary={(pageData) => {
                            const total = pageData.reduce((sum, { score, weight }) => {
                                return sum + score * weight
                            }, 0)
                            return (
                                <>
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell>Total</Table.Summary.Cell>
                                        <Table.Summary.Cell colSpan={3}>{total.toFixed(3)}</Table.Summary.Cell>
                                    </Table.Summary.Row>
                                </>
                            )
                        }}
                    />
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Meaning of Performance </h1>
                    <Image className='mb-2 w-full' preview={false} src={data['img-example']} alt='' />
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Navigation</h1>
                    <Image className='w-full' preview={false} src={data['img-navigation']} alt='' />
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>First Contentful Paint</h1>
                    <Image className='w-full' preview={false} src={data['img-fcp']} alt='' />
                </section>
                <section className='flex flex-col'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Largest Contentful Paint</h1>
                    <Image className='w-full' preview={false} src={data['img-lcp']} alt='' />
                </section>
            </Content>
        </Content>
    )
}

export default connect(({ performance }) => {
    const { scores } = performance
    return {
        scores,
    }
})(withBaseContent(Performance))
