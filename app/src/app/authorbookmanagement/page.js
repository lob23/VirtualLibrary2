"use client"

import React, { Suspense, useState } from "react"
import _authorbookpage from './authorbookmanagement'

export default function authorBookManagement (){
    
    return (
        <>
        <Suspense>
            <_authorbookpage />
        </Suspense>
        </>
    )
}