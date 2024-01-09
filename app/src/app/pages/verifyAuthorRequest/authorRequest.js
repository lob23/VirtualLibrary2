import React, { useState, useEffect } from "react"
import {useSearchParams, useRouter } from "next/navigation";
import { Audio } from 'react-loader-spinner'

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

import Modal from '@mui/material/Modal';

import {
    Box,
    ListItemIcon,
    MenuItem,
    lighten,
} from '@mui/material';


export default function authorRequestList(){
    const table_headers = ["File upload", "Time", "Status"]

    const router = useRouter()

    const searchParams = useSearchParams()
    const [requestcard, setrequestcard] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        const getAuthorRequest = async () => {
            try {
                const request = await fetch("api/request", {
                    method: "GET",
                }); 
        
                const request_list = await request.json()
                if (request_list.stat == true){
                    const requestcard = []
                    request_list.data.map((_request) => (
                        requestcard.push({
                            _id: _request._id,
                            userID: _request.Request_userId,
                            motivation: _request.Request_motivation,

                        })
                    ))
                    await setrequestcard(bookcard)
                    setLoading(false)
                } else {
                    console.log(request_list.data)
                }
            } catch(error){
                console.log("Fetching error: ", error)
            }
        }
    
        getAuthorRequest()
    
    }, [])

    const columns = useMemo(() => [
        {
            accessorKey: '_id',
            header: 'Request ID',
            size: 150
        },
        {
            accessorKey: 'userID',
            header: 'User ID',
            size: 150
        },
        {
            accessorKey: 'motivation',
            header: 'Motivation',
            size: 150
        },
    ],[]);

    const Modal =( (req) =>{
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Verify the request {req._id}
                    </Typography>
                    <button onClick={}>Verif</button>
                </Box>
                </Modal>
            </div>
        }
    )
    const table = useMaterialReactTable({
        columns: columns,
        data: bookcards,
        muiTableBodyRowProps: ({ row }) => ({
            onClick: (event) => {
              handleOpenEditor(event, row.id)
            },
            sx: {
              cursor: 'pointer', //you might want to change the cursor too when adding an onClick
            },
        }),
        
    });

    
    return (
        <>
        {      
            loading == false ?  
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
                                        User request
                                    </Typography>
                                </div>

                            </div>

                        </CardHeader>

                        <CardBody className="overflow-scroll px-0">
                            <MaterialReactTable table={table} />
                        </CardBody>

                    </Card>
                </div>
            :
                <div className='flex items-center justify-center h-screen'>
                    <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    />
                </div>
        }
        </>
    );
}