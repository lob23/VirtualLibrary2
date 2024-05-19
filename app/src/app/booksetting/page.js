"use client"
import React, { Suspense } from "react";
import _booksettingform from './bookSettingForm'

export default function booksetting() {

    return (
        <>
        <Suspense>
            <div className="w-screen h-screen">
                <_booksettingform />
            </div>
        </Suspense>
        </>)
}