"use client"
export const dynamic = 'force-dynamic'

import _pdfReader from '@/app/reading/pdfReader'
import { Suspense } from 'react'

export default function pdfReaderPage() {
    return (
        <>
        <Suspense>
            <_pdfReader />
        </Suspense>
        </>
    )
}