import { useEffect, useState } from 'react'
import { Layout, Image } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import request from 'src/utils/request'
import img from 'src/assets/images/img.png'

const { Content } = Layout

function Performance() {
    const [data, setData] = useState({
        'img-example': img,
        'img-navigation': img,
        'img-fcp': img,
        'img-lcp': img,
    })

    useEffect(() => {
        request.get('http://blingtron.chryseis.cn/performance.json').then(({ data }) => {
            setData(data)
        })
    }, [])

    return (
        <Content className='overflow-auto'>
            <PageHeader title='Performance' />
            <Content>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'> Performance Score</h1>
                    <Image className='mb-2 w-full' preview={false} src={data['img-example']} alt='' />
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

export default withBaseContent(Performance)
