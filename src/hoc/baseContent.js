const withBaseContent = (Component) => {
    return (props) => (
        <div className='flex-1 p-5 overflow-auto'>
            <Component {...props} />
        </div>
    )
}

export default withBaseContent
