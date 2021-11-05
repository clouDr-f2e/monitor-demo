import React, { Suspense } from 'react'

const LazyLoad = (component) => {
    const DynamicComponent = React.lazy(component)

    return (props) => (
        <Suspense fallback={<div>Loading...</div>}>
            <DynamicComponent {...props} />
        </Suspense>
    )
}

export default LazyLoad
