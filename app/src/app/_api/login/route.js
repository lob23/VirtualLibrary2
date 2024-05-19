import config from '../../config'
import api from '@/app/_api'
//POST
export const postLogin = async (req) => {
    const {username, password} = req;
    const queryString = config.BACKEND_URL + "/auth/login";
    var token = await api.post(queryString, {
        email: username,
        password: password
    });
    localStorage.setItem('accessToken', token.data.accessToken);
}

export const getRole = async () => {
    const queryString = config.BACKEND_URL +"/role";
    var role = await api.get(queryString);
    return role.data;
}