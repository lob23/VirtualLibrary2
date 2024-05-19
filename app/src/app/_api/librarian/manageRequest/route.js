import {NextResponse} from "next/server"
import config from '@/app/config'
import axios from '@/app/_api'

export async function getList() {

    const queryString = config.BACKEND_URL + "/request"

    try {
        const response = await axios.get(queryString)
        if (response.status != 200) {
            throw new Error('Network response was not ok');
        }
  
        return response.data;
    } catch (error) {
        console.error('Error fetching request data:', error);
        throw error;
    }

}

export async function acceptRequest(rid) {
    const queryString = config.BACKEND_URL + "/request/acceptRequest/" + rid;

    try{
        const res = await axios.patch(queryString)
            .then(response => {
                
                if(response.data) return {stat: true, data: response.data};
                else return {stat: false, data: null};
            })
            .catch(error => {
                console.error('Error accept request: ', error.response ? error.response.data : error.message);
                return  error.response ? error.response.data : error.message
            });  
        return NextResponse.json(res) 
        
    } catch(error){
        console.log(error)
        return NextResponse.json(error) 

    }
}

export async function rejectRequest(rid) {
    const queryString = config.BACKEND_URL + "/request/deleteRequest/" + rid;

    try{
        const res = await axios.delete(queryString)
            .then(response => {
                
                if(response.data) return {stat: true, data: response.data};
                else return {stat: false, data: null};
            })
            .catch(error => {
                console.error('Error reject request: ', error.response ? error.response.data : error.message);
                return  error.response ? error.response.data : error.message
            });  
        return NextResponse.json(res) 
        
    } catch(error){
        console.log(error)
        return NextResponse.json(error) 

    }
}