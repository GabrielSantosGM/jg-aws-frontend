import axios from 'axios'

const api = axios.create({
    baseURL: 'http://3.220.18.44:8081',
})

export default api