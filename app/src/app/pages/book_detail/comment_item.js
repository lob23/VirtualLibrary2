"use client";


export default function commentItem() {
    return (
        <div className='flex flex-col w-fit h-fit mt-5 ml-5 overflow-hidden'>
            <div className="flex flex-row w-fit h-fit">
                <div className="w-fit h-fit font-Gilroy_sb text-[14px] text-blue">Holly</div>
                <div className="w-fit h-fit mx-1 text-[14px] text-blue">•</div>
                <div className="w-fit h-fit font-Gilroy_sb text-[14px] text-blue/70">35 mins ago</div>
            </div>
            <div className="w-fit h-fit mt-5 font-Gilroy_md text-[12px] text-blue">
                This book is so good! I love the characters and the story. I can't wait for the next book!
            </div>
        </div>
    );
}