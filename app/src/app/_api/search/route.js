import { NextResponse } from "next/server";
import axios from '@/app/_api';
import config from '../../config'

export const fetchData = async () => {
    const apiUrl = config.BACKEND_URL + '/book/getListByStatus/verified'; 

    try {
        const response = await axios.get(apiUrl);

        if (response.status != 200) {
            throw new Error('Network response was not ok');
        }

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchAuthorById = async (id) => {
    const apiUrl = config.BACKEND_URL + `/users/getUser/${id}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',

        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching book data:', error);
        throw error;
    }
};

