import { useEffect } from 'react'
import { Skeleton } from 'antd'
import wv from 'src/utils/reportPerf'

function Loading() {
    useEffect(() => {
        return () => {
            wv.customContentfulPaint()
        }
    }, [])

    return (
        <div className='flex-1 p-5'>
            <Skeleton />
        </div>
    )
}

export default Loading
