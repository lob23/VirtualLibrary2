import React, { useState, useEffect } from "react"
import {useSearchParams, useRouter } from "next/navigation";
import _authorbookpage from './authormanagement'
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

export default function authorBookManagement (){
    const table_headers = ["File upload", "Time", "Status"]

    const searchParams = useSearchParams()
    const [bookcards, setbookscard] = useState([])

    const author_id = searchParams.get('author')
    console.log("author_id: ", author_id)

    useEffect(() => {
        const getBooks = async () => {
            try {
                const books = await fetch("api/composingbook?author="+author_id, {
                    method: "GET",
                }); 
        
                const book_list = await books.json()
                if (book_list.stat == true){
                    const bookcard = []
                    book_list.bookList.map((book) => (
                        bookcard.push({
                            File_upload: book.BDetail_title,
                            Time: book.BDetail_publishedDay,
                            Status: book.BDetail_status,
                        })
                    ))
                    setbookscard(bookcard)
                } else {
                    console.log(book_list.error)
                }
            } catch(error){
                console.log("Fetching error: ", error)
            }
        }
    
        getBooks()
    
    }, [author_id])

    
    return (
        <div className="w-full h-full place-items-center">
            <img
                className="object-contain"
                src="/image/logo.png">
            </img>
            <Card className='h-4/5 w-full'>
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">

                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Your Story List
                            </Typography>
                        </div>
                        <div className="flex w-full shrink-0 gap-2 md:w-max">
                            <button className="flex items-center gap-3" >
                                New Book
                            </button>
                        </div>
                        
                    </div>

                </CardHeader>

                <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {
                                    table_headers.map((header) => (
                                        <th key={header} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                                {header}
                                            </Typography>
                                            
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookcards.map(({File_upload, Time, Status} ) => 
                                    {
                                        return (
                                            <tr key={File_upload}>
                                                <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {File_upload}
                                                    </Typography>
                                                </td>
                                                <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography className="font-normal" variant="small" color="blue-gray">
                                                        {Time}
                                                    </Typography>
                                                </td>
                                                <td className="p-4 border-b border-blue-gray-50">
                                                    <Typography className="font-normal" variant="small" color={{Status} == "editing" ? "blue": Status == "verified" ? "green" : "blue-gray"}>
                                                        {Status}
                                                    </Typography>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </CardBody>

            </Card>
        </div>
    );
}