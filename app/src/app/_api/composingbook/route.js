import {NextResponse} from "next/server"
import config from '../../config'
import axios from "axios"
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render

//GET
export async function getComposingBook(authorid){
    try{
        
        const queryStringBook = config.BACKEND_URL + "/book/getBDetailByAuthorID/" + authorid
        const books =  await axios.get(queryStringBook)
                                         .then(response => {
                                            if (response.data){
                                                return [true, response.data];
                                            } else {
                                                return [false, null]
                                            }
                                         })
                                         .catch(error=>{
                                            console.error('Error getting submited book:', error.response ? error.response.data : error.message);
                                            return  error.response ? error.response.data : error.message
                                         })
                                         
        return books[0] == true ? NextResponse.json({
            stat: books[0],
            bookList: books[1] 
        }) : NextResponse.json({
            stat: books[0],
            error: books[1]
        });
    
    } catch(error){
        console.error('Error getting submited book:', error.response ? error.response.data : error.message);
        return NextResponse.json({
            stat: false,
            error: error
        });
    }

    
}