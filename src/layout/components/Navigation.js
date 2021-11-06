import { useEffect, useCallback, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import cls from 'classnames'
import routes from 'src/router/routes'

function Navigation() {
    const ref = useRef([])
    const history = useHistory()
    const location = useLocation()
    const [barStyle, setBarStyle] = useState({})

    const handleNavi = useCallback(
        (route) => {
            const activeTab = ref.current.find((tab) => tab.id === location.pathname)
            history.push(route.path)
        },
        [history, location.pathname]
    )

    useEffect(() => {
        const activeTab = ref.current.find((tab) => tab.id === location.pathname)
        setBarStyle({ width: activeTab.clientWidth + 'px' })
    }, [location.pathname])

    return (
        <div className='relative flex items-center h-16'>
            {routes.map((route, i) => (
                <div
                    ref={(el) => (ref.current[i] = el)}
                    id={route.path}
                    className={cls(
                        'p-2',
                        'text-xl',
                        {
                            'text-blue-300': location.pathname === route.path,
                            'text-gray-800': location.pathname !== route.path,
                        },
                        'cursor-pointer',
                        'hover:text-blue-300'
                    )}
                    key={route.path}
                    onClick={() => handleNavi(route)}
                >
                    {route.title}
                </div>
            ))}
            <div className='absolute z-10 left-0 bottom-0 h-px bg-blue-300' style={barStyle} />
            <div className='absolute left-0 bottom-0 w-full h-px bg-bg-gray-10' />
        </div>
    )
}

export default Navigation
