
export default function updateComp(book, author){
    console.log("check author home: ", author);
    console.log("check book home: ", book);
    const defaultImage = "/image/book_sample1.png";   
    if (!book || !author) {
        return null;
    }
    return(
        <>
            <div className="group relative w-[275px] h-[375px] cursor-pointer overflow-hidden hover:shadow-cream/30 transition-shadow"> 
            <img className="object-cover w-full h-full rounded-3xl transition-transform duration-500"
                    src={book.BDetail_image ? `data:image/png;base64,${book.BDetail_image}` : defaultImage}>
            </img>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:to-cream rounded-3xl"/>
            <div className="absolute inset-0 flex flex-col mx-5 text-left translate-y-[20%] group-hover:translate-y-0 transition-all duration-500">
                <div className="relative w-full h-full">
                    <div className="absolute w-full h-2/5 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-Gilroy_bd text-xl text-black ">
                            {book.BDetail_genre}
                        </h3>
                        <h1 className="text-2xl font-Gilroy_sb text-blue leading-tight w-fit">
                            {book.BDetail_title}
                        </h1>
                        {author && (
                            <h2 className="text-lg font-Gilroy_md text-blue">
                                {author}
                            </h2>
                        )}
                        
                    </div>
                </div>
            </div>
            </div>
        </>
    ); 
}