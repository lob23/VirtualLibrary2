"use client"

import { Suspense } from 'react'
import _manageRequest from './manageRequest'

export default function _page() {
    return (
        <>
        <Suspense>            
            <_manageRequest />
        </Suspense>
        </>
    )
}