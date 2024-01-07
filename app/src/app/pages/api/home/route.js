// api.js
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

export const fetchBookByAuthorId = async (id) => {
  const apiUrl = `http://localhost:3030/book/getBDetailByAuthorID/${id}`; // Dynamic URL with the book ID
  console.log("apiUrl: ", apiUrl);
  try {
    const response = await axios.get(apiUrl).then((res) => {
      console.log("res: ", res.data);

      return res.data;
    }).catch((error) => {
      console.log("Fetch book by id error: ",error);
    });

    if (!response) {
      throw new Error('Network response was not ok');
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
}

export const fetchReadingList = async (id) => {
  const apiUrl = `http://localhost:3030/rlist/getRList/${id}`; 
  console.log("apiUrlRList: ", apiUrl);
  try{
    const response = await axios.get(apiUrl).then((res)=>{
      console.log("res rlist: ", res.data);
      return res.data;
    }).catch((error)=>{
      console.log("Fetch rlist error: ", error);
    });

    if(!response){
      throw new Error('Network response was not ok');
    }
    return NextResponse.json(response)
  }catch(error){
    console.error('Error fetching rlist data:', error);
    throw error; 
  }
}