import api from "..";

export const getRole = async () => {
    const queryString = config.BACKEND_URL +"/role";
    var role = await api.get(queryString);
    return role.data;
}