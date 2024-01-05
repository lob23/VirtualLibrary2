import React from 'react';  // Import React
import _request from '@/app/pages/request/request_form'

export default function requestScreen(){
    return (
        <>
        <div className='relative w-full h-full'>
            <_request/>
        </div>
        </>
        
      );
}