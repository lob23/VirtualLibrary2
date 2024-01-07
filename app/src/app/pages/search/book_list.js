"use client";

import React, { useEffect, useState } from "react";
import bookdetail from './book_detail';
import { fetchData } from "../api/home/route";



export default function booklist() {
    const [loading, setLoading] = useState(true);
    const [books, setBook] = useState([]);
    const [author, setAuthor] = useState([])
    useEffect(() => {
        const fetchBookData = async () => {
            try {
                // Fetch book details
                const bookData = await fetchData();
                setBook(bookData);
                console.log('Book details:', bookData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchBookData();
    }, []);


    return (
        <div className='relative w-screen h-full z-0'>
            <ul className="relative w-full h-full">
                {
                    books.map((item) => (
                        <li className="relative w-full h-full">
                            {bookdetail(item)}
                        </li>
                    ))
                }
            </ul>



        </div>
    );
}