import {NextResponse} from "next/server"
import config from '@/app/config'
import axios from '@/app/_api'

export async function getList() {

    const queryString = config.BACKEND_URL + "/book/getListByStatus/waiting"

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
        console.error('Error fetching book data:', error);
        throw error;
    }

}

export async function updateStatus(bid, status) {
    const queryString = config.BACKEND_URL + "/book/updateStatus?BDetail_id=" + bid + "&status=" + status;

    try{
        const res = await axios.patch(queryString)
            .then(response => {
                
                if(response.data) return {stat: true, data: response.data};
                else return {stat: false, data: null};
            })
            .catch(error => {
                console.error('Error update status book: ', error.response ? error.response.data : error.message);
                return  error.response ? error.response.data : error.message
            });  
        return NextResponse.json(res) 
        
    } catch(error){
        console.log(error)
        return NextResponse.json(error) 

    }
}