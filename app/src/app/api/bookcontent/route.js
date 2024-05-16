import {NextResponse} from "next/server"
import config from '../../config'
import axios from "axios"

export const dynamic = 'force-dynamic'; // <- add this to force dynamic render



export async function GET(req){
    const bookID = req.nextUrl.searchParams.get('bid')

    try{

        const queryStringBookContent = config.BACKEND_URL + "/book/getBContent/" + bookID
        const books =  await axios.get(queryStringBookContent)
                                        .then(response => {
                                            if (response.data){
                                                return [true, response.data];
                                            } else {
                                                return [false, null]
                                            }
                                        })
                                        .catch(error=>{
                                            console.error('Error getting book contents:', error.response ? error.response.data : error.message);
                                            return  error.response ? error.response.data : error.message
                                        })
                                         
        return books[0] == true ? NextResponse.json({
            stat: books[0],
            bookContent: books[1] 
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