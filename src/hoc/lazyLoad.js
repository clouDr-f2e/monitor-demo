import React, { Suspense } from 'react'

const LazyLoad = (Component) => {
    const DynamicComponent = React.lazy(Component)

    return (props) => (
        <Suspense fallback={<div>Loading...</div>}>
            <DynamicComponent {...props} />
        </Suspense>
    )
}

export default LazyLoad
