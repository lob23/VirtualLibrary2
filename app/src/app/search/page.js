"use client";
import React, { Suspense, useEffect, useState } from "react";

import _searchForm from "@/app/search/search_form"
import _header from "@/app/search/header_search"
import _footer from "@/app/wrapper/footer"
import _booklist from './book_list';
import _latestUpdate from "./latest_update";
import { fetchAuthorById } from "../_api/book_detail/route";
import { Audio } from "react-loader-spinner";



export default function Search_screen() {
    const [isSearchRendered, setSearchRendered] = useState(false)


    return (
        <>
        <Suspense>
            {!isSearchRendered?
                    <div className='flex flex-col w-full h-full overflow-hidden overflow-y-auto z-0'>
                        <div className="w-full h-fit z-30 bg-cream">
                            <_header />
                        </div>
                        <div className="w-full h-fit overflow-hidden z-30" >
                            <_searchForm />
                        </div>
                        <div className=" w-full h-fit overflow-hidden z-20">
                            <latestUpdate />
                        </div>
                        <div className="w-9/10 gap-y-5  overflow-x-hidden px-10 mt-10 z-20">
                            <_booklist />
                        </div>
                        <div className="w-full h-fit">
                            <_footer />
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
        </Suspense>
        </>
    );
}