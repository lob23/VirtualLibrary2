import axios from 'axios';
import config from '@/app/config'

const api = axios.create({
    baseURL:  config.BACKEND_URL,
    withCredentials: true
});

export default api;