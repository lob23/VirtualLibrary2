import React from 'react';  // Import React
import _searchForm from "@/app/pages/search/search_form"
import _header from "@/app/pages/wrapper/header"


export default function search_screen(){
    return (
        <div className='relative w-screen h-full'>
            <div className='relative w-screen h-auto bg-cream '>
                <_header />
            </div>
            <div className='relative w-screen h-full'>
                <_searchForm />
            </div>
            
            
        </div>
    );
}