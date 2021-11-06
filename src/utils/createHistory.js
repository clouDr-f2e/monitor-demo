import { createHashHistory, createBrowserHistory } from 'history'

const createHistory = ({ hash = true }) => {
    const hashHistory = hash ? createHashHistory() : createBrowserHistory()

    const listen = hashHistory.listen

    hashHistory.listen = function (cb) {
        if (cb && typeof cb === 'function') {
            cb()
            listen.call(this, cb)
        }
    }

    return hashHistory
}

export default createHistory
