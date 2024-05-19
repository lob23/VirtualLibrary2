import axios from 'axios';
import config from '@/app/config'

const api = axios.create({
    baseURL:  config.BACKEND_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default api;