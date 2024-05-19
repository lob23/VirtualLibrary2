"use client"

import _manageRequest from './manageRequest/manageRequest'
import _manageUser from './manageUser/manageUser'
import _manageBook from './manageBook/manageBook'
import { Suspense } from 'react'

export default function pdfReaderPage() {
    return (
        <>
        <Suspense>
            <_manageBook />
        </Suspense>
        </>
    )
}