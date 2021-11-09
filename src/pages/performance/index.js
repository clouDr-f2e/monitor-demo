import { Layout } from 'antd'
import PageHeader from 'src/components/PageHeader'
import withBaseContent from 'src/hoc/baseContent'
import img1 from 'src/assets/images/img1.png'
import img2 from 'src/assets/images/img2.png'
import img3 from 'src/assets/images/img3.png'
import img4 from 'src/assets/images/img4.png'
import img5 from 'src/assets/images/img5.png'

const { Content } = Layout

function Performance() {
    return (
        <Content className='overflow-auto'>
            <PageHeader title='Performance' />
            <Content>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Meaning of Performance </h1>
                    <img className='mb-2 w-full' src={img1} alt='' />
                    <img className='w-full' src={img2} alt='' />
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Navigation</h1>
                    <img className='w-full' src={img5} alt='' />
                </section>
                <section className='flex flex-col mb-5'>
                    <h1 className='mb-4 text-2xl text-gray-700'>First Contentful Paint</h1>
                    <img className='w-full' src={img3} alt='' />
                </section>
                <section className='flex flex-col'>
                    <h1 className='mb-4 text-2xl text-gray-700'>Largest Contentful Paint</h1>
                    <img className='w-full' src={img4} alt='' />
                </section>
            </Content>
        </Content>
    )
}

export default withBaseContent(Performance)
