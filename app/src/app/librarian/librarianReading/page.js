"use client"

import { Suspense } from 'react'
import _reading from './librarianReading'

export default function pdfReaderPage() {
    return (
        <>
        <Suspense>
            <_reading />
        </Suspense>
        </>
    )
}