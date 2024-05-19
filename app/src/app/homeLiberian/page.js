"use client";
import { Suspense } from "react";
import _librarianHomepage from "./librarian_homepage"

export default function homeliberian() {

    return (
        <>
        <Suspense>
            <div>
                <_librarianHomepage/>
                {/* <button>verify author request</button>
                <button>verify book request</button>
                <button>user management</button> */}
            </div>
        </Suspense>
        </>
    );
}