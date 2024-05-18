import React, { Suspense } from 'react';  // Import React
import _request from '@/app/request/request_form'

export default function requestScreen(){
    return (
        <>
        <Suspense>
            <div className='relative w-full h-full'>
                <_request/>
            </div>
        </Suspense>
        </>
        
      );
}