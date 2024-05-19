"use client"

import _bookdetail from "@/app/book_detail/bDetail"
import { Suspense } from 'react'

export default function bookSubmission(){

    return (
        <>
        <Suspense>
            <div className="flex items-center justify-center h-screen">
                <_bookdetail/>
            </div>
        </Suspense>
        </>
    )
}