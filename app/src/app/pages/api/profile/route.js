import axios from "axios";
import { NextResponse } from "next/server";

export const fetchProfile = async (id) => {
    const apiUrl = `http://localhost:3030/users/getUser/${id}`;
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