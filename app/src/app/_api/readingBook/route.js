import axios from '@/app/_api';
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
export const getReadingBook = async (bid) => {
    try{
        const queryString = config.BACKEND_URL + "/rlist/getPage?" + "bookId=" + bid;
        
        const res = await axios.get(queryString);
        if(res.status != 200)
            throw new Error("Cannot fetch Reading books")
        return res;
    }catch(error){
        return null;
    }
}

// PUT
export const putReadingBook = async (req) =>{
    try{
        const obj = req;
        console.log("OBJ: ", obj)

        const queryString = config.BACKEND_URL + "/rlist?" +  "bookId=" + obj.RList_bookId;

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
