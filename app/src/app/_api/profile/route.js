import axios from '@/app/_api';
import { NextResponse } from "next/server";
import config from '../../config'


export const fetchProfile = async () => {
    const apiUrl = config.BACKEND_URL + `/users/getUser`;
    try {
        const response = await axios.get(apiUrl);

        if (response.status != 200) {
            throw new Error('Network response was not ok');
        }
  
        return response.data;
    } catch (error) {
        console.error('Error fetching book data:', error);
        throw error;
    }
}