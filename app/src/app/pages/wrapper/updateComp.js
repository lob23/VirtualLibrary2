"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../api/wrapper/route";
import { fetchAuthorById } from "../api/book_detail/route";


export default function updateComp(book){

    const defaultImage = "/image/book_sample1.png";
    return(
        <>
            <div className="group relative w-[275px] h-[375px] cursor-pointer overflow-hidden hover:shadow-cream/30 transition-shadow"> 
            <img className="object-cover w-full h-full rounded-3xl transition-transform duration-500"
                    src={book.BDetail_image ? `data:image/png;base64,${book.BDetail_image}` : defaultImage}>
            </img>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:to-cream rounded-3xl"/>
            <div className="absolute inset-0 flex flex-col mx-5 text-left translate-y-[20%] group-hover:translate-y-0 transition-all duration-500">
                <div className="relative w-full h-full">
                    <div className="absolute w-full h-1/3 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-Gilroy_bd text-xl text-red ">
                            {book.BDetail_genre}
                        </h3>
                        <h1 className="text-2xl font-Gilroy_sb text-blue leading-tight w-2/3">
                            {book.BDetail_title}
                        </h1>
                        <h2 className="text-lg font-Gilroy_md text-blue">
                            {book.BDetail_authorID}
                        </h2>
                    </div>
                </div>
            </div>
            </div>
           
        
        </>
    ); 
}