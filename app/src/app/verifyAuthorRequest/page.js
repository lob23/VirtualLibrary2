import _authorRequest from '@/app/verifyAuthorRequest/authorRequest'
import { Suspense } from 'react'

export default function authorRequestVerifyPage(){
    return (
        <>
            <Suspense>
                <_authorRequest /> 
            </Suspense>
        </>
    )
}