"use client"

import { Suspense } from 'react'
import _manageUser from './manageUser'

export default function _page() {
    return (
        <>
        <Suspense>
            <_manageUser />
        </Suspense>
        </>
    )
}