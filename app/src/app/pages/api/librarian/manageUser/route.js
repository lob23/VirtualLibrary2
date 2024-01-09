import {NextResponse} from "next/server"
import config from '@/app/config'
import axios from "axios"

export async function getList() {

    const queryString = config.BACKEND_URL + "/users"

    try {
        const response = await fetch(queryString, {
            method: 'GET',
  
        });
  
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }

}