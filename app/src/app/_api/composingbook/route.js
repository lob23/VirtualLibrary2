import {NextResponse} from "next/server"
import config from '../../config'
import axios from '@/app/_api'

//GET
export async function getComposingBook(authorid){
    try{
        
        const queryStringBook = config.BACKEND_URL + "/book/getBDetailByAuthorID"
        const books =  await axios.get(queryStringBook);
                          
        if(books.status != 200) throw new Error("Cannot get composing books")
        return books.data;
    
    } catch(error){
        console.error('Error getting submited book:', error.response ? error.response.data : error.message);
        return null;
    }
}