"use client"

import _submissionForm from '@/app/bookSubmission/submissionForm'
import { Suspense } from 'react'

export default function bookSubmission(){

    return (
        <>
        <Suspense>
            <div className="flex items-center justify-center h-screen">
                <_submissionForm/>
            </div>
        </Suspense>
        </>
    )
}