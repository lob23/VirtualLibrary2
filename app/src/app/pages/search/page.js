"use client";
import React, { useEffect, useState } from "react";

import _searchForm from "@/app/pages/search/search_form"
import _header from "@/app/pages/search/header_search"
import _footer from "@/app/pages/wrapper/footer"
import booklist from './book_list';
import latestUpdate from "./latest_update";
import { fetchAuthorById } from "../api/book_detail/route";
import { Audio } from "react-loader-spinner";



export default function search_screen() {
    const [isSearchRendered, setSearchRendered] = useState(false)


    return (
        <>
            {!isSearchRendered?
                    <div className='flex flex-col w-full h-full overflow-hidden overflow-y-auto z-0'>
                        <div className="w-full h-fit z-30 bg-cream">
                            {_header()}
                        </div>
                        <div className="w-full h-fit overflow-hidden z-30" onChange={()=> {setSearchRendered(true)}}>
                            {_searchForm()}
                        </div>
                        <div className=" w-full h-fit overflow-hidden z-20">
                            {latestUpdate()}
                        </div>
                        <div className="w-9/10 gap-y-5  overflow-x-hidden px-10 mt-10 z-20">
                            {booklist()}
                        </div>
                        <div className="w-full h-fit">
                            {_footer()}
                        </div>
                    </div>
                :
                    <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    />
            }
        </>
    );
}