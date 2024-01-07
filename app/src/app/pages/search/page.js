"use client";
import _searchForm from "@/app/pages/search/search_form"
import _header from "@/app/pages/wrapper/header"
import _footer from "@/app/pages/wrapper/footer"
import React, { useEffect, useState } from "react";

import booklist from './book_list';
import { fetchData } from "../api/home/route";



export default function search_screen() {



    return (
        <div className='relative w-screen h-full z-0'>

            {booklist()}


        </div>
    );
}