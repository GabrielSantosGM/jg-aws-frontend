import axios from 'axios'

const api = axios.create({
    baseURL: 'http://35.171.51.43:8081',
})

export default api