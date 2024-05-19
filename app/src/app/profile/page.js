import React, { Suspense } from 'react';  // Import React
import _profilePage from "@/app/profile/profile_page" 

export default function profile_screen(){
    return(
        <>
            <Suspense>
                <div>
                        <_profilePage/>
                </div>
            </Suspense>
       </>
    );
}