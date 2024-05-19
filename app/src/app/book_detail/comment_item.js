"use client";

import { useEffect, useState } from "react";
import { getUser } from '@/app/_api/book_detail/route'

export default function CommentItem(comment) {

  const [userName, setUser] = useState("");

  useEffect(() => {
    const prepare = async () => {
      try {

        // Get user data
        const response = await getUser(comment.Comment_userId);
        console.log(response);
        setUser(response.User_lastname);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    prepare();
  }, []);

  return (
    <div className='flex flex-col w-fit h-fit mt-5 ml-5 '>
      <div className="flex flex-row w-fit h-fit">
        <div className="w-fit h-fit font-Gilroy_sb text-[14px] text-blue">
          {userName}
        </div>
        <div className="w-fit h-fit mx-1 text-[14px] text-blue">•</div>
        <div className="w-fit h-fit font-Gilroy_sb text-[14px] text-blue/70">
          {formatDateTime(comment.Comment_time)}
        </div>
      </div>
      <div className="w-fit h-fit mt-5 font-Gilroy_md text-[12px] text-blue">
        {comment.Comment_content}
      </div>
    </div>
  );
}

function formatDateTime(dateTimeString) {
  const options = {
    day: 'numeric',
    month: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'UTC',
  };

  const date = new Date(dateTimeString);
  date.setHours(date.getHours() + 7); // Adjust for UTC+7

  return date.toLocaleDateString('en-GB', options);
}