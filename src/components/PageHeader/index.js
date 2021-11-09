import { Divider } from 'antd'

function PageHeader({ title }) {
    return (
        <>
            <div className='text-3xl font-semibold'>{title}</div>
            <Divider type='horizontal' />
        </>
    )
}

export default PageHeader
