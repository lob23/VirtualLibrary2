import React, { useState, useEffect } from "react"
import StickyBox from "react-sticky-box"
import { Link, Element } from "react-scroll";
import {useSearchParams, useRouter } from "next/navigation";
import _authorbookpage from './authormanagement'

export default function authorBookManagement (){
    const searchParams = useSearchParams()
    const [booksLib, setbooksLib] = useState([])

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
                    setbooksLib(book_list.bookList)
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
        <>
            <h1>Composing Books</h1>{" "}
            <StickyBox>
                <ul
                    style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    listStyleType: "none",
                    paddingLeft: "20px",
                    backgroundColor: "#e2e2e2",
                    flexWrap: "nowrap",
                    height: "70px",
                    justifyItems: "center"
                    }}
                >
                    {booksLib.map((book) => (
                        <li
                        style={{
                            display: "inline-block",
                            margin: "20px",
                        }}
                        >
                        {book.BDetail_title}
                        </li>
                    ))}
                </ul>
            </StickyBox>
            <h1>Submited Books</h1>{" "}
            <StickyBox>
                <ul
                    style={{
                    marginTop: "10px",
                    display: "flex",
                    flexDirection: "row",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    listStyleType: "none",
                    paddingLeft: "20px",
                    backgroundColor: "#e2e2e2",
                    flexWrap: "nowrap",
                    height: "70px",
                    justifyItems: "center"
                    }}
                >
                    {booksLib.map((book) => (
                        <li
                        style={{
                            display: "inline-block",
                            margin: "20px",
                        }}
                        >
                        {book.BDetail_title}
                        </li>
                    ))}
                </ul>
            </StickyBox>
        </>
    )
}