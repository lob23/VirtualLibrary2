"use client"
export const dynamic = 'force-dynamic'

import _pdfReader from '@/app/reading/pdfReader'

export default function pdfReaderPage() {
    return (
        <>
            <_pdfReader />
        </>
    )
}