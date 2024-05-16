import {NextResponse} from "next/server"
import config from '../../config'
import axios from "axios"

export async function POST(req) {

    const content = await req.json();

    try{
        const queryString = config.BACKEND_URL + "/request/createRequest/";

        const res = await axios.post(queryString, content)
            .then(response => {
                
                if(response.data){
                    return {stat: true, data: response.data};
                } else {
                    return null;
                }
            })
            .catch(error => {
                console.error('Error creating request:', error.response ? error.response.data : error.message);
                return  error.response ? error.response.data : error.message;
            });  
        return NextResponse.json(res);
        
    } catch(error){
        console.log(error)
        return NextResponse.json(error); 

    }
}

export async function GET(req){
    try{
        const queryString = config.BACKEND_URL + "/request"
        const res = await axios.get(queryString)
                               .then(response => {
                                    if (response.data){
                                        return [true, response.data];
                                    } else {
                                        return [false, null];
                                    }
                                })
                                .catch(error => {
                                    return [false, error];
                                })
        return NextResponse.json({
            stat: res[0],
            data: response.data
        });
    } catch(error){
        return NextResponse.json({
            stat: res[0],
            data: error
        });
    }
}