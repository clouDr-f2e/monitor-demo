import React, { Suspense } from 'react'
import Loading from 'src/components/Loading'

const LazyLoad = (Component) => {
    const DynamicComponent = React.lazy(Component)

    return (props) => (
        <Suspense fallback={<Loading />}>
            <DynamicComponent {...props} />
        </Suspense>
    )
}

export default LazyLoad
