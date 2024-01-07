import _commentItem from './comment_item';


export default function commentSection() {
    return (
        <div className='flex flex-col w-full h-full overflow-hidden border-l-2 border-y-0 border-b-0 border-solid border-blue border-opacity-40 '>
            <div className='flex flex-col w-full h-3/4  '>
                {_commentItem()}
                {_commentItem()}
                {/* tượng trưng thui  */}
            </div>
            <div className='flex flex-wrap w-full h-1/4 bg-yellow overflow-x-hidden justify-center '>
                <div className='flex flex-row w-4/5 h-[35px]  rounded-[100px] overflow-hidden mt-5'>
                    <input className='w-3/4 h-[35px] bg-white '
                        placeholder='Type your comment'>
                    </input>
                    <button className='w-1/4 h-full font-Gilroy_sb bg-blue text-white'>
                        Send
                    </button>

                </div>

            </div>
        </div>
    );
}