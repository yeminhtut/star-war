import axios from 'axios'
import qs from 'qs'
import config from '../../config'

const defaultRequestConfig = {
    baseURL: config.apiHost,
    timeout: config.networkTimeout,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const agent = axios.create({ ...defaultRequestConfig })

const appendHeader = axiosConfig => {
    return axiosConfig
}

const errorHandler = error => {
    return Promise.reject(error)
}

agent.interceptors.request.use(appendHeader, errorHandler)

const get = (uri, options = {}) => {
    return agent.get(uri, options)
}

export { get }
