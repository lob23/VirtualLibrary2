import axios from "axios";
import { NextResponse } from "next/server";
import config from '../../config'


export const fetchProfile = async (id) => {
    const apiUrl = config.BACKEND_URL + `/users/getUser/${id}`;
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
  
        });
  
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log("res profile: ", data);
        return data;
    } catch (error) {
        console.error('Error fetching book data:', error);
        throw error;
    }
}