import axios from 'axios'

const api = axios.create({
    baseURL: 'http://LB-BACKEND-3b9d2e0a8ead3f25.elb.us-east-1.amazonaws.com',
})

export default api