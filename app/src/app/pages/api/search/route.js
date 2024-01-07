import { NextResponse } from "next/server";
import axios from "axios";
export const fetchData = async () => {
    const apiUrl = 'http://localhost:3030/book/getListByStatus/verified'; // replace with your actual API endpoint

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },

            // You can add more options here, such as credentials, mode, etc.
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const fetchAuthorById = async (id) => {
    const apiUrl = `http://localhost:3030/users/getUser/${id}`;

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














