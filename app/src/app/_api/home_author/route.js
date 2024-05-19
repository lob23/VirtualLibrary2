// api.js
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

export const fetchBookByAuthorId = async (id) => {
  const apiUrl = config.BACKEND_URL + '/book/getBDetailByAuthorID'; // Dynamic URL with the book ID
  try {
    const response = await axios.get(apiUrl);
    console.log("response: ", response.data);

    if (response.status != 200) {
      throw new Error('Network response was not ok');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
}

export const fetchReadingList = async () => {
  const apiUrl = config.BACKEND_URL + `/rlist/getRList`; 
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

export const fetchAuthorById = async (id) => {
  const apiUrl = config.BACKEND_URL + '/users/getUser';

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
};