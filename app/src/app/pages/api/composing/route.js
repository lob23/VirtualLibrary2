import {NextResponse} from "next/server"
import config from '../../../config'
import axios from "axios"

export async function POST(req) {

    const content = await req.json()

    try{
        const queryString = config.BACKEND_URL + "/book/createBook/"

        const res = await axios.post(queryString, content)
            .then(response => {
                
                if(response.data){
                    return {stat: true, data: response.data};
                } else {
                    return null
                }
            })
            .catch(error => {
                console.error('Error creating book:', error.response ? error.response.data : error.message);
                return  error.response ? error.response.data : error.message
            });  
        return NextResponse.json(res) 
        
    } catch(error){
        console.log(error)
        return NextResponse.json(error) 

    }
}

export async function PUT(req) {

    const {_id, BDetail_contentId, BContent_content} = await req.json()
    const put_obj = {
        BContent_content,
    }

    try{
        const queryString = config.BACKEND_URL + "/book/updateBContent/" + _id

        const res = await axios.patch(queryString, put_obj)
            .then(response => {
                
                if(response.data){
                    return {stat: true, data: response.data};
                } else {
                    return null
                }
            })
            .catch(error => {
                console.error('Error update book:', error.response ? error.response.data : error.message);
                return  error.response ? error.response.data : error.message
            });  
        return NextResponse.json(res) 
        
    } catch(error){
        console.log(error)
        return NextResponse.json(error) 

    }
}

export async function GET(req){

}