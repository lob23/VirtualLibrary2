"use client";
import React, { useEffect, useState } from "react";

import _searchForm from "@/app/pages/search/search_form"
import _header from "@/app/pages/wrapper/header"
import _footer from "@/app/pages/wrapper/footer"

import booklist from './book_list';
import latestUpdate from "./latest_update";



import { fetchData } from "../api/home_author/route";



export default function search_screen() {



    return (
        <div className='flex flex-col w-full h-full overflow-hidden overflow-y-auto '>
            <div className="w-full h-fit z-30 bg-cream">
                {_header()}
            </div>
            <div className="w-full h-fit overflow-hidden">
                {_searchForm()}
            </div>
            <div className=" w-full h-fit overflow-hidden">
                {latestUpdate()}
            </div>
            <div className="w-9/10 gap-y-5  overflow-x-hidden px-10 mt-10">
                {booklist()}
            </div>
            <div className="w-full h-fit">
                {_footer()}
            </div>

        </div>
    );
}