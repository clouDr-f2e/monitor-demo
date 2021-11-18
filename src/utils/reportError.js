import { message } from 'antd'
import { init } from '@zyf2e/monitor-web'
import { app } from 'src/App'

init({
    dsn: 'https://chryseis.cn/api',
    maxBreadcrumbs: 100,
    beforeAppAjaxSend({ method, url }) {
        if (/(http(?:s|):).*/.test(url)) {
            const protocol = url.replace(/(http(?:s|):).*/, '$1')
            if (window.location.protocol !== protocol) {
                message.error({ content: '资源与站点协议不一致', className: 'monitor-message' })
            }
        }
    },
    beforePushBreadcrumb(breadcrumb, data) {
        app._store.dispatch({
            type: 'error/addItem',
            payload: { ...data, time: +new Date() },
        })
    },
})
