"use client";
import React, { useEffect, useState } from "react";

import _searchForm from "@/app/pages/search/search_form"
import _header from "@/app/pages/wrapper/header"
import _footer from "@/app/pages/wrapper/footer"

import booklist from './book_list';

import { fetchData } from "../api/home/route";



export default function search_screen() {



    return (
        <div className='w-screen h-full overflow-x-hidden '>
            <div className="w-full overflow-x-hidden">
                {booklist()}
            </div>



        </div>
    );
}