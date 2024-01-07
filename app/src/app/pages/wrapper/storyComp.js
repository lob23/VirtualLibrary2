"use client";
export default function story_comp(book){ 
    const defaultImage = "/image/book_sample1.png"; 
    return(
        <>
        <div className="relative w-[500px] h-[170px] bg-white bg-opacity-60 rounded-3xl shadow-lg shadow-yellow">
            <div className="absolute grid grid-flow-col grid-cols-3 w-full h-full top-0 bottom-0 right-0 left-0 items-center">
                <div className=" col-span-1 w-[135px] h-[135px] m-auto">
                    <img className="object-cover w-full h-full rounded-3xl ml-2"
                         src={book.BDetail_image ? `data:image/png;base64,${book.BDetail_image}` : defaultImage}>
                    </img>
                </div>
                <div className="col-span-2 flex flex-col w-full h-auto ml-5 py-3">
                    <h2 className="font-Gilroy_sb w-2/3 h-auto text-blue text-2xl leading-none">
                        {book.BDetail_title}
                    </h2>
                    <h4 className="font-Gilroy_sb w-2/3 h-auto text-yellow text-lg mt-2">
                        {book.BDetail_status}
                    </h4>
                </div>
            </div>
        </div>
        </>
    );
}