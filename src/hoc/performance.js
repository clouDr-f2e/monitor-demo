const withPerformance = (Component) => {
    return (props) => (
        <div className='flex-1 p-5'>
            <Component {...props} />
        </div>
    )
}

export default withPerformance
