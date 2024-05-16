import axios from "axios";
import { NextResponse } from "next/server";
import config from '../../config'
export const dynamic = 'force-dynamic'; // <- add this to force dynamic render

export async function POST(req){
    try {
        const obj = await req.json();

        const queryString = config.BACKEND_URL + "/rlist/createRList";

        const res = await axios.post(queryString, obj).then((response) => {
            if (response.data){
                
                return [true, response.data];
            } else{
            
                return [false, null]
            }
        })
        .catch((error) => {
            return [false, error]
        });

        return NextResponse.json({
            stat:res[0],
            data: res[1]
        })
    } catch(error){
        console.log("ERROR: ", error)
        return NextResponse.json({
            stat:false,
            data: error
        })
    }
}

export async function GET(req){
    const uid = req.nextUrl.searchParams.get('uid')
    const bid = req.nextUrl.searchParams.get('bid')
    try{


        const queryString = config.BACKEND_URL + "/rlist/getPage?userId=" + uid + "&bookId=" + bid;
        
        const res = await axios.get(queryString)
                         .then(response => {
                            if (response.data){
                                return [true, response.data];
                            } else {
                                return [true, null]
                            }
                         })
                         .catch((error) => {
                            return [false, error]
                         })
        
        return NextResponse.json({
            stat: res[0],
            data: res[1]
        });
    }catch(error){
        return NextResponse.json({
            stat: false,
            data: error
        });
    }
}

export async function PUT(req){
    try{
        const obj = await req.json();
        console.log("OBJ: ", obj)

        const queryString = config.BACKEND_URL + "/rlist?userId=" + obj.RList_userId + "&bookId=" + obj.RList_bookId;

        const res = await axios.patch(queryString, obj).then(response => {
            if (response.data){
                return [true, response.data];
            } else{
                return [false, null]
            }
        }).catch((error) => {
            return [false, error]
        })

        return NextResponse.json({
            stat: res[0],
            data: res[1]
        })
    }catch(error){
        return NextResponse.json({
            stat:false,
            data: error
        })
    }
}
