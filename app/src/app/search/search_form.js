import { useEffect, useState, useMemo } from "react";
import { fetchData, fetchAuthorById } from "../_api/search/route";
import { Link } from "react-scroll"
import _footer from "@/app/wrapper/footer"
import { useSearchParams, useRouter } from "next/navigation";



export default function Search_form() {

  const [searchResults, setSearchResults] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const uid = searchParams.get('uid');

  useEffect(() => {
    // Filter books based on the search query
    const filteredResults = books.filter(
      (book) =>
        book &&
        book.BDetail_title &&
        book.BDetail_title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery]);


  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {

        //book in latest update 
        const result = await fetchData();
        console.log(result);
        setBooks(result);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  const refBDtail = (_bid) => {
    console.log("RefBDTAIL")
    router.push("/book_detail?uid=" + uid + "&bid=" + _bid);
  }

  return (
    <>
    
      <div className=" flex flex-col w-full h-auto items-center ">
        <div class="relative w-screen h-[300px] bg-cream ">
          <h1 className="static font-Gilroy_md text-blue text-4xl text-center pt-40 mb-30 pb-5 z-15">
            Choose your stories
          </h1>
          <div class="z-5">
            <div className="absolute -bottom-20 -right-20 w-[200px] h-[200px] transform rotate-90">
              <img className="object-center  w-full h-full "
                src="/image/reg_cir.png">
              </img>
            </div>

            <div className="absolute -bottom-25 -left-40 w-[300px] h-[300px] transform -rotate-90">
              <img className="object-center w-full h-full "
                src="/image/reg_cir.png">
              </img>
            </div>

            <div className="absolute -bottom-20 left-10 w-40 h-40 transform -rotate-120">
              <img className="object-center w-full h-full"
                src="/image/reg_cir.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-auto transform absolute translate-y-[270px] items-center  ">
          <div className=" flex flex-row w-full  h-[60px] rounded-[12px]  overflow-hidden bg-white items-center drop-shadow-xl ">
            <div className="mx-4">
              <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1937">
                  <path id="Stroke 455" d="M1.99965 35.854L11.0273 26.8263" stroke="#27219A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path id="Stroke 456" fill-rule="evenodd" clip-rule="evenodd" d="M21.3447 2C13.331 2 6.83593 8.4951 6.83593 16.5088C6.83593 24.5225 13.331 31.0176 21.3447 31.0176C29.3584 31.0176 35.8535 24.5225 35.8535 16.5088C35.8535 8.4951 29.3584 2 21.3447 2V2Z" stroke="#27219A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </div>

            <input
              className="h-full w-4/5 text-lg text-gray-700 border-0 focus:border-0 shadow-none  placeholder-blue/40 font-Gilroy_md bg-white"
              type="text"
              id="search"
              placeholder="Enter the story or the author"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery && (
            <div className="bg-white w-full h-fit rounded-md drop-shadow-lg z-50">
              {searchResults.map((result) => (
                <div key={result._id} className="z-50">
                  <Link key={result._id} onClick={() => { refBDtail(result._id) }} className="cursor-pointer">
                    <p className="font-Gilroy_md text-blue/70 text-[12px] py-4 px-5 hover:text-blue z-50">
                      {result.BDetail_title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
