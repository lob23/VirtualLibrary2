import axios from "axios";
import { NextResponse } from "next/server";
import config from '../../config'

// POST
export const postReadingBook = async (req) => {
    try {
        const obj = req;

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

// GET
export const getReadingBook = async (uid, bid) => {
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

// PUT
export const putReadingBook = async (req) =>{
    try{
        const obj = req;
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
