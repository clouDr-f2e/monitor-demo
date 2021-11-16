import { useEffect, useState } from 'react'
import { connect } from 'dva'
import { Layout, Image, Table } from 'antd'
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

    useEffect(() => {
        request.get('./data/performance.json').then(({ data }) => {
            setData(data)
        })
    }, [])

    return (
        <Content className='overflow-auto'>
            <PageHeader title='Performance' />
            <Content>
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
