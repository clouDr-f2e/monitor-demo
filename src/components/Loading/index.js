import wv from 'src/utils/reportPerf'
import { useEffect } from 'react'

function Loading() {
    useEffect(() => {
        return () => {
            wv.customContentfulPaint()
        }
    }, [])

    return <div className='flex-1 p-5'>loading</div>
}

export default Loading
