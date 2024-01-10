import _commentItem from './comment_item';
import { useEffect, useState } from "react";
import { getCommentList } from '@/app/pages/api/book_detail/route';
import { useSearchParams, useRouter } from "next/navigation";

export default function commentSection() {

    const searchParams = useSearchParams();
    const uid = searchParams.get('uid');
    const BDetail_id = searchParams.get('bid');

    const [commentList, setList] = useState();
    const [content, setContent] = useState("");
    const [up, setUp] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( content === "" ) return null;
        console.log("Comment: ", content);
        const res = await fetch("api/book_detail", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Comment_userId: uid,
            Comment_bookId: BDetail_id,
            Comment_content: content,
          }),
        });
        setUp( up + 1 );
        setContent("");
        const Com = await res.json().then( result => { return result } )
    };

    useEffect(() => {
        
        const prepare = async () => {
          try {
            // Get comment list
            const response = await getCommentList(BDetail_id);
            setList(response);
            console.log('Comment list:', commentList);
          } 
          catch (error) {
            console.error('Error:', error);
          }
        };
    
        prepare();

        const interval = setInterval( prepare, 10000 );

        return () => clearInterval(interval);
      }, [up]);

    return (
        <div className='flex flex-col w-full h-full overflow-hidden border-l-2 border-y-0 border-b-0 border-solid border-blue border-opacity-40 '>
            <div className='flex flex-col w-full h-3/4 overflow-y-auto '>
                {
                    commentList && commentList.length > 0 ? (
                    commentList.map((comment, index) => (
                        <_commentItem key={index} Comment_userId={comment.Comment_userId} Comment_time={comment.Comment_time} Comment_content={comment.Comment_content} />
                    ))
                    ) : (
                    <p>No comments available.</p>)
                }
            </div>
            <div className='flex flex-wrap w-full h-1/4 bg-yellow overflow-x-hidden justify-center'>
                <div className='flex flex-row w-4/5 h-[35px] rounded-lg overflow-hidden mt-5'>
                    <input 
                        type='text'
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        id='content'
                        className='w-3/4 h-[35px] bg-white focus:bg-white'
                        placeholder='Type your comment'>
                    </input>
                    <button className='w-1/4 h-full font-Gilroy_sb bg-blue text-white cursor-pointer' onClick={handleSubmit}>
                        Send
                    </button>

                </div>

            </div>
        </div>
    );
}