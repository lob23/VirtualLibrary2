"use client"

import { Suspense } from 'react'
import _manageBook from './manageBook'

export default function _page() {
    return (
        <>
        <Suspense>
            <_manageBook />
        </Suspense>
        </>
    )
}