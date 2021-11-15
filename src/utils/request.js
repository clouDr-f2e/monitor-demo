import axios from 'axios'

const service = axios.create()

const request = {
    get(url, config) {
        return service.get(url, config)
    },
    post(url, data, config) {
        return service.post(url, data, config)
    },
}

export default request
