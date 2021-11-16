import { useEffect, useCallback, useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import cls from 'classnames'
import routes from 'src/router/routes'

function Navigation() {
    const wrapRef = useRef(null)
    const barRefs = useRef([])
    const history = useHistory()
    const location = useLocation()
    const [barStyle, setBarStyle] = useState({})

    const handleNavi = useCallback(
        (route) => {
            history.push(route.path)
        },
        [history]
    )

    useEffect(() => {
        if (wrapRef.current) {
            const wrapOffsetX = wrapRef.current.getBoundingClientRect().x
            const activeTab = barRefs.current.find((tab) => tab.id === location.pathname)
            if (activeTab) {
                const deltaX = activeTab.getBoundingClientRect().x - wrapOffsetX
                setBarStyle({ width: activeTab.clientWidth + 'px', transform: `translate3d(${deltaX}px,0px,0px)` })
            }
        }
    }, [location.pathname])

    return (
        <div className='relative flex items-center h-16 shadow-sm' ref={wrapRef}>
            {routes.map((route, i) => (
                <div
                    ref={(el) => (barRefs.current[i] = el)}
                    id={route.path}
                    className={cls(
                        'px-3 py-2',
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
            <div
                className='absolute z-10 left-0 bottom-0 h-0.5 bg-blue-300 transition-transform transition-all duration-200 ease-linear'
                style={barStyle}
            />
            <div className='absolute left-0 bottom-0 w-full h-px bg-bg-gray-10' />
        </div>
    )
}

export default Navigation
