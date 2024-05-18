import {NextResponse} from "next/server"
import config from '../../config'
import axios from "axios"

//GET
export const getBookDetail = async (bid) =>{
  try{
    const queryString = config.BACKEND_URL + "/book/getBDetail/" + bid;

    const res = await axios.get(queryString).then((response) => {
      if(response.data){
        return [true, response.data];
      } else {
        return [false, response.error];
      }
    })

    return NextResponse.json({stat: res[0], data: res[1]});
  }catch(error){
    return NextResponse.json({stat: false, data: error});
  }
}

export const fetchBookById = async (id) => {
  const apiUrl = config.BACKEND_URL +`/book/getBDetail/${id}`; // Dynamic URL with the book ID

  try {
    const response = await axios.get(apiUrl);
    console.log("response: ", response);

    if (response.status != 200) {
      throw new Error('Network response was not ok');
    }

    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
};

export const fetchAuthorById = async (id) => {
  const apiUrl = config.BACKEND_URL + `/users/getUser/${id}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.status != 200) {
      throw new Error('Network response was not ok');
    }

    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
};

export const getCommentList = async (BDetail_id) => {
  const apiURL = config.BACKEND_URL + `/comment/getComment/${BDetail_id}`;
  // console.log(BDetail_id);

  try {
    const response = await axios.get(apiURL);

    if (response.status != 200) throw new Error('Network response was not ok');

    const data = await response.data;
    return data;
  } 
  catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
}

export const getNestedComment = async (Comment_id) => {
  const apiURL = config.BACKEND_URL + `/comment/getNestedComment/${Comment_id}`;

  try {
    const response = await axios.get(apiURL);

    if (response.status != 200) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
}

export const getUser = async (User_id) => {
  const apiURL = config.BACKEND_URL + `/users/comment/${User_id}`;

  try {
    const response = await axios.get(apiURL);

    if (response.status != 200) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching book data:', error);
    throw error;
  }
}

//set book detail (POST)
export const postBookDetail = async(req) => {

  const content = req;

  try{
      const queryString = config.BACKEND_URL + "/comment/createComment"
      console.log(content)

      const res = await axios.post(queryString, content)
          .then(response => {
              
              if(response.data){
                  return {stat: true, data: response.data};
              } else {
                  return null
              }
          })
          .catch(error => {
              console.error('Error creating comment:', error.response ? error.response.data : error.message);
              return  error.response ? error.response.data : error.message
          });  
      return NextResponse.json(res) 
      
  } catch(error){
      console.log(error)
      return NextResponse.json(error) 

  }
}
