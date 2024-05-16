"use client"

import _manageRequest from './manageRequest/manageRequest'
import _manageUser from './manageUser/manageUser'
import _manageBook from './manageBook/manageBook'

export default function pdfReaderPage() {
    return (
        <>
            <_manageBook />
        </>
    )
}