"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../api/wrapper/route";


export default function updateComp({book}){
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
 
//   useEffect(() => {
//     const fetchDataFromApi = async () => {
//       try {
//         const result = await fetchData();
//         console.log( result );
//         setBooks(result);
//         console.log(books);
//         setLoading(false);
//       } catch (error) {
//         // Handle error
//         console.error('Error:', error);
//         setLoading(false);
//       }
//     };

//     fetchDataFromApi();
    
//   }, []);
//   return (
//     <>
//       {books.length > 0 && (
//         <div className="relative w-full h-full overflow-hidden">
//              <ul className="relative flex flex-row gap-10 overflow-x-auto no-scrollbar w-full h-full py-5 list-none">
//              {
//                 books.map((book)=>(
//                 <li className="relative w-full h-full" key={book.book_id}>
//                     <div className="group relative w-[275px] h-[375px] cursor-pointer overflow-hidden hover:shadow-cream/30 transition-shadow"> 
//                         <img className="object-cover w-full h-full rounded-3xl transition-transform duration-500"
//                              src="/image/book.png">
//                         </img>
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:to-cream rounded-3xl">
//                 </div>
//                 <div className="absolute inset-0 flex flex-col mx-5 text-left translate-y-[20%] group-hover:translate-y-0 transition-all duration-500">
//                     <div className="relative w-full h-full">
//                         <div className="absolute w-full h-1/3 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <h3 className="font-Gilroy_bd text-xl text-red ">
//                            {book.BDetail_genre}
//                         </h3>
//                         <h1 className="text-2xl font-Gilroy_sb text-blue">
//                             {/* {book.BDetail_title} */}
//                         </h1>
//                         <h2 className="text-lg font-Gilroy_md text-blue">
//                             {/* {book.BDetail_authorID} */}
//                             Author
//                         </h2>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//                 </li>
//                 ))
//             }
//             </ul> 
//         </div>
//       )}
//     </>
//   );

    return(
        <>
            <div className="group relative w-[275px] h-[375px] cursor-pointer overflow-hidden hover:shadow-cream/30 transition-shadow"> 
            <img className="object-cover w-full h-full rounded-3xl transition-transform duration-500"
                    src="/image/book.png">
            </img>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:to-cream rounded-3xl"/>
            <div className="absolute inset-0 flex flex-col mx-5 text-left translate-y-[20%] group-hover:translate-y-0 transition-all duration-500">
                <div className="relative w-full h-full">
                    <div className="absolute w-full h-1/3 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-Gilroy_bd text-xl text-red ">
                            {book.BDetail_genre}
                        </h3>
                        <h1 className="text-2xl font-Gilroy_sb text-blue">
                            {/* {book.BDetail_title} */}
                        </h1>
                        <h2 className="text-lg font-Gilroy_md text-blue">
                            {/* {book.BDetail_authorID} */}
                            Author
                        </h2>
                    </div>
                </div>
            </div>
            </div>
           
        
        </>
    ); 
}