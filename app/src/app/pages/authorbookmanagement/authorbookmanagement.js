import React, { useState, useEffect } from "react"
import {useSearchParams, useRouter } from "next/navigation";
import _authorbookpage from './authormanagement'

import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

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

import {
    Box,
    ListItemIcon,
    MenuItem,
    lighten,
} from '@mui/material';

export default function authorBookManagement (){
    const table_headers = ["File upload", "Time", "Status"]

    const searchParams = useSearchParams()
    const [bookcards, setbookscard] = useState([])
    

    const author_id = searchParams.get('uid')
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
                            _id: book._id,
                            File_upload: book.BDetail_title,
                            CreatedTime: book.BDetail_createdDay,
                            PublishedTime: book.BDetail_publishedDay,
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

    const columns = useMemo(() => [
        {
            accessorKey: 'File_upload',
            header: 'Book',
            size: 150
        },
        {
            accessorKey: 'CreatedTime',
            header: 'Created Time',
            size: 150
        },
        {
            accessorKey: 'PublishedTime',
            header: 'Published Time',
            size: 150
        },
        {
            accessorKey: 'Status',
            header: 'Status',
            size: 200,
            Cell: ({ cell }) => (
                <Box
                sx={(theme) => ({
                    backgroundColor: cell.getValue() == "verified"? theme.palette.success.dark : cell.getValue() == "editing"?theme.palette.warning.light: theme.palette.error.dark,
                    borderRadius: '0.25rem',
                    color: '#fff',
                    width: 50,
                    p: '0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                })}
                >
                    {cell.getValue()}
                </Box>
            ),
        }
    ],[]);

    const table = useMaterialReactTable({
        columns: columns,
        data: bookcards,
    });

    const handleOpenEditor = async (e) => {
        e.preventDefault()
        try {
            
        }catch(error){

        }
    }

    
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
                    <MaterialReactTable table={table} />
                </CardBody>

            </Card>
        </div>
    );
}