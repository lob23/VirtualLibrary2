import React, { useEffect, useState } from "react";
import bookdetail from './book_list_item';
import { fetchData, fetchAuthorById } from "../_api/search/route";
import { useRouter, useNavigation, useSearchParams } from "next/navigation";
import { Audio,Circles } from "react-loader-spinner";

export default function Booklist() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(true);
    const [books, setBook] = useState([]);
    const [author, setAuthor] = useState([])

    const uid = searchParams.get('uid');
    // useEffect(() => {
    //     const fetchBookData = async () => {
    //         try {
    //             // Fetch book details
    //             const bookData = await fetchData();
    //             setBook(bookData);
    //             console.log('Book details:', bookData);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching details:', error);
    //         }
    //     };

    //     fetchBookData();
    // }, []);


    useEffect(() => {
        const fetchBookData = async () => {
            try {
                // Fetch book details
                const bookDataArray = await fetchData();
                setBook(bookDataArray);

                if (bookDataArray.length > 0) {
                    // Map through each book in the array
                    const authorsPromises = bookDataArray.map(async (book) => {
                        if ('BDetail_authorID' in book) {
                            return fetchAuthorById(book.BDetail_authorID);
                        } else {
                            console.error('BDetail_authorID is undefined in a book');
                            return null; // or handle the case where author ID is undefined
                        }
                    });


                    const authorsData = await Promise.all(authorsPromises);
                    setAuthor(authorsData);
                    console.log('Authors details:', authorsData);
                    setLoading(false);
                } else {
                    console.error('No books found in the array');
                }
            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchBookData();
    }, []);

    return (
        <>
            {loading?
                <div className="flex flex-wrap w-full h-full justify-center items-center">

                </div>
                :
                    <div className='w-full h-full flex flex-col overflow-hidden overflow-y-auto'>
                        <p className="w-fit h-fit font-Gilroy_sb text-3xl text-blue ">Library</p>
                        <ul className="grid grid-cols-2 gap-x-0 gap-y-4 grid-flow list-none overflow-x-hidden mt-10 px-10 ">
                            {books.map((book, index) => (
                                <li key={index} className="w-full h-full overflow-hidden" onClick={() => {router.push("/book_detail?uid=" + uid + "&bid=" + book._id)}}>
                                    {/* Pass both book and author to the bookdetail component */}
                                    {bookdetail(book, author[index])}
                                </li>
                            ))}
                        </ul>
                    </div>
            }
    </>);
}