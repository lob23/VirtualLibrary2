import React from 'react';  // Import React
import _searchForm from "@/app/pages/search/search_form"
import _header from "@/app/pages/wrapper/header"
import _footer from "@/app/pages/wrapper/footer"


export default function search_screen(){
    return (
        <div className='relative w-screen h-full z-0'>
            <div className='relative w-screen h-auto bg-cream '>
                <_header />
            </div>
            <div className='relative w-screen h-full z-10'>
                <_searchForm />
            </div>
            <div className='relative w-screen h-auto z-50'>
                <_footer />
            </div>
            
        </div>
    );
}