import {NextResponse} from "next/server"
import config from '@/app/config'
import api from '@/app/_api'

export async function getList() {

    const queryString = config.BACKEND_URL + "/users"
    try {
        const response = await api.get(queryString);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }

}